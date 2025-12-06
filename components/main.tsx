import { Badge } from "./ui/badge";

export function Main() {
  return (
    <main className="h-full border border-t-0 p-4 items flex items-center w-full">
      <aside>
        <Badge variant={"secondary"} className="p-2 rounded-md">
            Hello world!
        </Badge>
        <h1 className="text-5xl mb-5 mt-4 leading-14">
          Explore the frontiers of <br />
          artificial intelligence
        </h1>
        <p className="text-muted-foreground font-normal">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines
          think, learn, and reshape the future. Join us on this visionary
          expedition into the heart of AI.
        </p>
      </aside>
    </main>
  );
}
