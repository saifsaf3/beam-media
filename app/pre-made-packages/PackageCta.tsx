"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type PackageCtaProps = {
  children: ReactNode;
  eventName:
    | "package_trial_click"
    | "package_core_click"
    | "package_growth_click"
    | "package_scale_click"
    | "custom_package_click";
  href: string;
  packageName: string;
};

export function PackageCta({
  children,
  eventName,
  href,
  packageName,
}: PackageCtaProps) {
  return (
    <a
      href={href}
      onClick={() => track(eventName, { package: packageName })}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
