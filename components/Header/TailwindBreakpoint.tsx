﻿export function TailwindBreakpoint() {
  return (
    <div className="fixed top-0 left-0 bg-gray-600 px-1">
      <div
        id="breakpoint-sm"
        className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
      >
        sm
      </div>
      <div
        id="breakpoint-md"
        className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden"
      >
        md
      </div>
      <div
        id="breakpoint-lg"
        className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden"
      >
        lg
      </div>
      <div
        id="breakpoint-xl"
        className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden"
      >
        xl
      </div>
      <div
        id="breakpoint-2xl"
        className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block"
      >
        2xl
      </div>
    </div>
  )
}