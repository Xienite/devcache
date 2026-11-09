import type { ComponentType } from "react";
import {
  AdjustmentsHorizontalIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
  ArrowPathRoundedSquareIcon,
  ArrowsRightLeftIcon,
  ArrowTurnDownRightIcon,
  BeakerIcon,
  BoltIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  ClockIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  CpuChipIcon,
  CubeIcon,
  ExclamationTriangleIcon,
  FlagIcon,
  FunnelIcon,
  HandRaisedIcon,
  KeyIcon,
  LinkIcon,
  PaintBrushIcon,
  PauseCircleIcon,
  PhoneArrowUpRightIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ScaleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  TagIcon,
  UserGroupIcon,
  VariableIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  SparklesIcon,
  ForwardIcon,
  ArrowTrendingUpIcon,
  ArrowLongRightIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

import AsyncRaceConditions from "./dev/async-race-conditions.mdx";
import Bootstrap from "./dev/bootstrap.mdx";
import CiBasics from "./dev/ci-basics.mdx";
import Closures from "./dev/closures.mdx";
import ContextComposition from "./dev/context-composition.mdx";
import ControlledVsUncontrolled from "./dev/controlled-vs-uncontrolled.mdx";
import CustomHooks from "./dev/custom-hooks.mdx";
import DeferredPromises from "./dev/deferred-promises.mdx";
import EventLoop from "./dev/event-loop.mdx";
import FormattingAndLinting from "./dev/formatting-and-linting.mdx";
import GitBranchSync from "./dev/git-branch-sync.mdx";
import GitHooks from "./dev/git-hooks.mdx";
import MocksSpiesStubs from "./dev/mocks-spies-stubs.mdx";
import PassingVsCalling from "./dev/passing-vs-calling-functions.mdx";
import PromiseErrorHandling from "./dev/promise-error-handling.mdx";
import ProxyContent from "./dev/proxy.mdx";
import SecureRandomness from "./dev/secure-randomness.mdx";
import ShortCircuitOperators from "./dev/short-circuit-operators.mdx";
import Singleton from "./dev/singleton.mdx";
import StaleClosuresReact from "./dev/stale-closures-react.mdx";
import StateRefsDerivedValues from "./dev/state-refs-derived-values.mdx";
import TestingAsyncCode from "./dev/testing-async-code.mdx";
import TypeAssertions from "./dev/type-assertions.mdx";
import TypeNarrowing from "./dev/type-narrowing.mdx";
import TypedArrays from "./dev/typed-arrays.mdx";
import TypesFromValues from "./dev/types-from-values.mdx";
import TypescriptGenerics from "./dev/typescript-generics.mdx";
import UseEffect from "./dev/use-effect.mdx";
import VitestBasics from "./dev/vitest-basics.mdx";
import WebStorage from "./dev/web-storage.mdx";
import Cors from "./dev/cors.mdx";
import TypescriptDeclarationFiles from "./dev/typescript-declaration-files.mdx";
import RecurringTimersReact from "./dev/recurring-timers-react.mdx";
import PureFunctionsReact from "./dev/pure-functions-react.mdx";
import WebSocketContent from "./dev/websocket.mdx";
import WhatToTest from "./dev/what-to-test.mdx";
import Interpolation from "./dev/interpolation.mdx";
import VectorsBasics from "./dev/vectors-basics.mdx";
import CssCustomProperties from "./dev/css-custom-properties.mdx";

export type Concept = {
  slug: string;
  title: string;
  description: string;
  icon: ComponentType<{ className: string }>;
  Content: ComponentType;
};

export type Section = {
  id: string;
  title: string;
  concepts: Concept[];
};

export const sections: Section[] = [
  {
    id: "javascript",
    title: "JavaScript",
    concepts: [
      {
        slug: "closures",
        title: "Closures",
        description: "Functions remember variables, not values",
        icon: LinkIcon,
        Content: Closures,
      },
      {
        slug: "passing-vs-calling-functions",
        title: "Passing vs Calling a Function",
        description: "fn vs fn() vs () => fn(), and when a wrapper is needed",
        icon: PhoneArrowUpRightIcon,
        Content: PassingVsCalling,
      },
      {
        slug: "short-circuit-operators",
        title: "Short-Circuit Operators",
        description: "&&, || and ?? return operands, and the JSX 0 trap",
        icon: BoltIcon,
        Content: ShortCircuitOperators,
      },
      {
        slug: "proxy",
        title: "Proxy",
        description: "An object that answers to any property name you ask for",
        icon: ArrowTurnDownRightIcon,
        Content: ProxyContent,
      },
      {
        slug: "typed-arrays",
        title: "Typed Arrays",
        description: "Uint8Array and friends, and the .map trap",
        icon: CpuChipIcon,
        Content: TypedArrays,
      },
      {
        slug: "interpolation",
        title: "Smoothing Between Samples",
        description: "Lerp, frame-rate independent easing and prediction",
        icon: ArrowTrendingUpIcon,
        Content: Interpolation,
      },
      {
        slug: "vectors-basics",
        title: "Vectors: Length and Direction",
        description: "Math.hypot, unit vectors and moving along a direction",
        icon: ArrowLongRightIcon,
        Content: VectorsBasics,
      },
    ],
  },
  {
    id: "async",
    title: "Async and Promises",
    concepts: [
      {
        slug: "event-loop",
        title: "Event Loop",
        description: "Call stack, task queues and when your callbacks actually run",
        icon: ArrowPathRoundedSquareIcon,
        Content: EventLoop,
      },
      {
        slug: "promise-error-handling",
        title: "Error Handling with Promises",
        description: "Catching, narrowing errors, and what users should see",
        icon: ExclamationTriangleIcon,
        Content: PromiseErrorHandling,
      },
      {
        slug: "deferred-promises",
        title: "Deferred Promises",
        description: "Settling a promise from outside, when you decide",
        icon: PauseCircleIcon,
        Content: DeferredPromises,
      },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    concepts: [
      {
        slug: "typescript-generics",
        title: "TypeScript Generics",
        description: "keyof, indexed access, extends, tuples and Parameters, step by step",
        icon: VariableIcon,
        Content: TypescriptGenerics,
      },
      {
        slug: "type-narrowing",
        title: "Type Narrowing",
        description: "typeof, instanceof, type predicates and unknown",
        icon: FunnelIcon,
        Content: TypeNarrowing,
      },
      {
        slug: "type-assertions",
        title: "Type Assertions",
        description: "as, value!, let x!: and when to trust yourself",
        icon: HandRaisedIcon,
        Content: TypeAssertions,
      },
      {
        slug: "types-from-values",
        title: "Types from Values",
        description: "as const, typeof, [number] and exhaustive records",
        icon: TagIcon,
        Content: TypesFromValues,
      },
      {
        slug: "typescript-declaration-files",
        title: "Declaration Files and Module Augmentation",
        description: ".d.ts, declare module, interface merging and skipLibCheck",
        icon: DocumentTextIcon,
        Content: TypescriptDeclarationFiles,
      },
    ],
  },
  {
    id: "browser",
    title: "Browser and Networking",
    concepts: [
      {
        slug: "websocket",
        title: "WebSocket",
        description: "Real two-way conversations, instead of endless polling",
        icon: ArrowsRightLeftIcon,
        Content: WebSocketContent,
      },
      {
        slug: "web-storage",
        title: "Web Storage",
        description: "localStorage vs sessionStorage, origins and pitfalls",
        icon: ArchiveBoxIcon,
        Content: WebStorage,
      },
      {
        slug: "secure-randomness",
        title: "Secure Randomness and Secure Contexts",
        description: "crypto vs Math.random, and APIs that need HTTPS",
        icon: KeyIcon,
        Content: SecureRandomness,
      },
      {
        slug: "cors",
        title: "CORS",
        description: "Origins, the same-origin policy, preflights and proxies",
        icon: GlobeAltIcon,
        Content: Cors,
      },
      {
        slug: "css-custom-properties",
        title: "CSS Custom Properties and Theming",
        description: "Where var() resolves, and reading tokens from canvas",
        icon: SwatchIcon,
        Content: CssCustomProperties,
      },
    ],
  },
  {
    id: "architecture",
    title: "App Architecture",
    concepts: [
      {
        slug: "bootstrap",
        title: "Bootstrap",
        description: "Startup code, main.tsx vs App.tsx and the composition root",
        icon: RocketLaunchIcon,
        Content: Bootstrap,
      },
      {
        slug: "singleton",
        title: "Singleton",
        description: "Exactly one instance, and why global access is the catch",
        icon: CubeIcon,
        Content: Singleton,
      },
    ],
  },
  {
    id: "react",
    title: "React",
    concepts: [
      {
        slug: "state-refs-derived-values",
        title: "State, Refs and Derived Values",
        description: "Where a value should live, and why let fails",
        icon: CircleStackIcon,
        Content: StateRefsDerivedValues,
      },
      {
        slug: "custom-hooks",
        title: "Custom Hooks",
        description: "What a hook is, and how to design one",
        icon: PuzzlePieceIcon,
        Content: CustomHooks,
      },
      {
        slug: "stale-closures-react",
        title: "Stale Closures in React",
        description: "Old render values and updater functions",
        icon: ClockIcon,
        Content: StaleClosuresReact,
      },
      {
        slug: "use-effect",
        title: "useEffect: Dependencies and Cleanup",
        description: "When effects run, cleanup and stable setters",
        icon: ArrowPathIcon,
        Content: UseEffect,
      },
      {
        slug: "recurring-timers-react",
        title: "Recurring Timers in React",
        description: "Recursive setTimeout, ref indirection and timer cleanup",
        icon: ForwardIcon,
        Content: RecurringTimersReact,
      },
      {
        slug: "pure-functions-react",
        title: "Pure vs Impure in React",
        description: "Why updaters must be pure, and how StrictMode catches it",
        icon: SparklesIcon,
        Content: PureFunctionsReact,
      },
      {
        slug: "async-race-conditions",
        title: "Async Race Conditions",
        description: "Ignoring late results, AbortController and more",
        icon: FlagIcon,
        Content: AsyncRaceConditions,
      },
      {
        slug: "context-composition",
        title: "Context for Component Composition",
        description: "Compound components, context vs cloneElement",
        icon: Squares2X2Icon,
        Content: ContextComposition,
      },
      {
        slug: "controlled-vs-uncontrolled",
        title: "Controlled vs Uncontrolled Components",
        description: "Who owns the state, and locking a dialog open",
        icon: AdjustmentsHorizontalIcon,
        Content: ControlledVsUncontrolled,
      },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    concepts: [
      {
        slug: "vitest-basics",
        title: "Unit Testing Basics with Vitest",
        description: "Test structure, matchers, environments and queries",
        icon: BeakerIcon,
        Content: VitestBasics,
      },
      {
        slug: "mocks-spies-stubs",
        title: "Mocks, Spies and Stubs",
        description: "vi.fn, vi.mock, vi.spyOn and vi.stubGlobal",
        icon: UserGroupIcon,
        Content: MocksSpiesStubs,
      },
      {
        slug: "testing-async-code",
        title: "Testing Asynchronous Code",
        description: "act, flushing promises, fake timers and races",
        icon: ScaleIcon,
        Content: TestingAsyncCode,
      },
      {
        slug: "what-to-test",
        title: "Deciding What to Test",
        description: "What earns a test, and testing behaviour",
        icon: CheckBadgeIcon,
        Content: WhatToTest,
      },
    ],
  },
  {
    id: "tooling",
    title: "Tooling and Git",
    concepts: [
      {
        slug: "formatting-and-linting",
        title: "Formatting and Linting",
        description: "Formatter vs linter, Prettier, oxlint and exit codes",
        icon: PaintBrushIcon,
        Content: FormattingAndLinting,
      },
      {
        slug: "git-hooks",
        title: "Git Hooks",
        description: "Husky, lint-staged and automatic checks on commit",
        icon: CommandLineIcon,
        Content: GitHooks,
      },
      {
        slug: "ci-basics",
        title: "CI Basics",
        description: "GitHub Actions workflows and why CI is the real gate",
        icon: ShieldCheckIcon,
        Content: CiBasics,
      },
      {
        slug: "git-branch-sync",
        title: "Keeping a Branch in Sync",
        description: "Merge vs rebase when the target branch moves on",
        icon: CodeBracketSquareIcon,
        Content: GitBranchSync,
      },
    ],
  },
];

// Flat list, handy for slug lookups and prev/next navigation.
export const allConcepts: Concept[] = sections.flatMap((s) => s.concepts);
