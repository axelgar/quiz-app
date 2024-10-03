import { Show } from "./atoms/Show";
import { WelcomeScreen, EndScreen } from "./components";
import { useGameProvider } from "./providers/GameProvider";
import { getQuestionComponent } from "./utils/get-question-component";

export default function App() {
  const { status, currentIndex, questions } = useGameProvider();

  return (
    <div className="bg-white h-full">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 h-full">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 min-h-[600px] flex flex-col justify-between gap-4 h-full">
          <Show when={status === "idle"}>
            <WelcomeScreen />
          </Show>
          <Show when={status === "start"}>{getQuestionComponent(questions[currentIndex])}</Show>
          <Show when={status === "end"}>
            <EndScreen />
          </Show>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
