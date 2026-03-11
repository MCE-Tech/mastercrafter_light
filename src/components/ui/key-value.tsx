import * as React from "react";

interface KeyValueProps {
  label: string;
  value?: React.ReactNode;
}

export function KeyValue({ label, value }: Readonly<KeyValueProps>) {
  if (value === undefined || value === null || value === "") {
    return null; // omit empty items
  }

  return (
    <div className="flex items-start space-x-2">
      <dt className="w-32 flex-shrink-0 text-muted-foreground font-medium">
        {label}
      </dt>
      <dd className="flex-1 font-semibold text-right md:text-left">
        {value}
      </dd>
    </div>
  );
}
