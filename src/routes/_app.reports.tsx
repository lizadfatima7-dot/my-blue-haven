import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileSpreadsheet, FileText } from "lucide-react";
import { toast } from "sonner";
import { type Device, generateDaily, monthlyCost, monthlyKwh } from "@/lib/energy";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

export const Route = createFileRoute("/_app/reports")({ component: Reports });

function Reports() {
  const { user } = useAuth();
  const [devices, setDevices] = useState<Device[]>([]);
  useEffect(() => {
    if (!user) return;
    supabase.from("devices").select("*").eq("user_id", user.id)
      .then(({ data }) => setDevices((data ?? []) as Device[]));
  }, [user]);

  const daily = useMemo(() => generateDaily(devices), [devices]);
  const totalKwh = monthlyKwh(devices);
  const cost = monthlyCost(devices);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18); doc.text("Voltly — Monthly Energy Report", 14, 20);
    doc.setFontSize(11); doc.setTextColor(100);
    doc.text(`Generated ${new Date().toLocaleDateString()}`, 14, 28);
    doc.setTextColor(0);
    doc.text(`Total: ${totalKwh.toFixed(0)} kWh | Estimated cost: $${cost.toFixed(2)}`, 14, 38);
    autoTable(doc, {
      startY: 46,
      head: [["Date", "Energy (kWh)", "Cost ($)"]],
      body: daily.map((d) => [d.date, d.kwh.toFixed(2), d.cost.toFixed(2)]),
      headStyles: { fillColor: [70, 110, 230] },
    });
    doc.save("voltly-report.pdf");
    toast.success("PDF downloaded");
  };

  const exportExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(daily);
    XLSX.utils.book_append_sheet(wb, ws, "Daily Usage");
    const summary = XLSX.utils.json_to_sheet([
      { metric: "Total kWh (month)", value: totalKwh.toFixed(2) },
      { metric: "Estimated cost ($)", value: cost.toFixed(2) },
      { metric: "Devices", value: devices.length },
    ]);
    XLSX.utils.book_append_sheet(wb, summary, "Summary");
    XLSX.writeFile(wb, "voltly-report.xlsx");
    toast.success("Excel downloaded");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-8">
      <div>
        <p className="text-sm text-muted-foreground">Reports</p>
        <h1 className="text-3xl font-bold tracking-tight">Export your data</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-lift">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-destructive-foreground" style={{ background: "var(--gradient-amber)" }}>
              <FileText className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">PDF Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Beautifully formatted monthly summary, ready to print or share.</p>
            <Button onClick={exportPDF} className="mt-4 gap-2"><Download className="h-4 w-4" /> Download PDF</Button>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-green)" }}>
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">Excel Workbook</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Raw daily data and summary metrics for your own analysis.</p>
            <Button onClick={exportExcel} className="mt-4 gap-2" variant="secondary"><Download className="h-4 w-4" /> Download Excel</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Last 30 days</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow><TableHead>Date</TableHead><TableHead className="text-right">Energy (kWh)</TableHead><TableHead className="text-right">Cost ($)</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {daily.map((d) => (
                <TableRow key={d.date}>
                  <TableCell>{d.date}</TableCell>
                  <TableCell className="text-right font-mono">{d.kwh.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-mono">{d.cost.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
