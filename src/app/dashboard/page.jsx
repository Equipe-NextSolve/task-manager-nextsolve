"use client";

import { requireLoginOrRedirect } from "@/utils/require-login-or-redirect";
import DashboardContent from "@/components/dashboard";

export default function DashboardPage() {

  requireLoginOrRedirect();

  return <DashboardContent />;
}