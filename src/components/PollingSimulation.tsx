import { useEffect, useRef, useState } from "react";
import SegmentedButton from "./SegmentedButton";

export default function PollingSimulation() {
  const [server, setServer] = useState({ value: generateValue(0, 10), prev: 10 });
  const serverValue = server.value;
  const [clientValue, setClientValue] = useState(500);
  const clientLoopRef = useRef(() => {});
  const serverLoopRef = useRef(() => {});
  const clientTimeoutIdRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const serverTimeoutIdRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    serverLoopRef.current = () => {
      serverTimeoutIdRef.current = setTimeout(() => {
        setServer(({ value, prev }) => ({
          value: generateValue(prev, value),
          prev: value,
        }));
        serverLoopRef.current();
      }, 100);
    };
    serverLoopRef.current();

    return () => clearTimeout(serverTimeoutIdRef.current);
  }, []);

  useEffect(() => {
    clientLoopRef.current = () => {
      setClientValue(serverValue);
      const bar = document.getElementById("PollingBar")!;
      bar.style.width = "0px";
      void bar.offsetWidth; // force reflow so width:0 is committed before re-enabling the transition
      bar.style.transition = "width 2s ease-in-out";

      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          document.getElementById("PollingBar")!.style.width = "100%";
        }),
      );

      clientTimeoutIdRef.current = setTimeout(() => {
        document.getElementById("PollingBar")!.style.transition = "none";
        clientLoopRef.current();
      }, 2000);
    };
  }, [serverValue]);

  useEffect(() => {
    clientLoopRef.current();

    return () => clearTimeout(clientTimeoutIdRef.current);
  }, []);

  return (
    <figure className="flex flex-col my-16 gap-8">
    <SegmentedButton active="Delay" buttons={["Late", "Idle"]}/>
    <div className="w-full flex gap-4">
      <Client value={clientValue} />
      <TransferZone />
      <Server value={serverValue} />
      </div>
    </figure>

  );
}

// function generateDelay() {
//   return Math.floor(Math.random() * 10) * 100;
// }

function generateValue(prev: number, currentValue: number) {
  if (currentValue === 100) {
    return currentValue - 1;
  } else if (currentValue === 0) {
    return currentValue + 1;
  } else if (prev > currentValue) {
    return currentValue - 1;
  } else {
    return currentValue + 1;
  }
}

function Client({ value }: { value: number }) {
  return (
    <div className="flex w-full grow flex-col gap-2 items-center">

      <div className=" w-full flex flex-col items-center gap-6 border p-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Angle</span>
          <span className="text-3xl">{value} °</span>
        </div>
        {/*<div className="w-full">
          <MetricBar label="Load" />
        </div>*/}
      </div>
      <span>Client</span>

    </div>
  );
}

function Server({ value }: { value: number }) {
  return (
    <div className="flex w-full grow flex-col gap-2 items-center">
      <div className="flex flex-col w-full items-center gap-6 border p-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">Angle</span>
          <span className="text-3xl">{value} °</span>
        </div>
        {/*<div className="w-full">
          <MetricBar label="Load" />
        </div>*/}
      </div>
      <span>Server</span>

    </div>
  );
}

function TransferZone() {
  return (
    <div className="flex grow flex-col items-center justify-between py-8">
      <div className="flex w-full grow items-center justify-center">
        <div className="flex w-full min-w-32 grow flex-col gap-1">
          {/*<div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Polling...</span>
          </div>*/}
          <div className=" h-4 w-full bg-muted mb-8">
            <div id="PollingBar" className="bg-foreground h-full" />
          </div>
        </div>
      </div>
      {/*<div className="w-full">
        <MetricBar label="Bandwidth" />
      </div>*/}
    </div>
  );
}

// function Metrics() {
//   return (
//     <div className="flex flex-col gap-2">
//       <MetricBar label="CPU" />
//       <MetricBar label="Bandwidth" />
//     </div>
//   );
// }

// Commented out together with Metrics above: unused locals fail `tsc -b`
// (noUnusedLocals), which breaks `npm run build`.
// function MetricBar({ label }: { label: string }) {
//   return (
//     <div className="flex min-w-32 flex-col gap-1">
//       <div className="flex justify-between">
//         <span className="text-muted-foreground text-xs">{label}</span>
//       </div>
//       <div className="h-2 w-full border">
//         <div className="bg-foreground h-full w-4" />
//       </div>
//     </div>
//   );
// }
