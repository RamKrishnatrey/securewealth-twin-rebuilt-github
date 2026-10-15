import { useEffect } from "react";

import { startWebPushAutoSync } from "@/services/webPushService";

/** Synchronizes an already-authorized browser token; it never opens a permission prompt. */
export function WebPushAutoSync() {
  useEffect(() => startWebPushAutoSync(), []);
  return null;
}
