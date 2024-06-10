import CommandProvider from "./CommandProvider";

export default function () {
  return (
    <header className=" w-full">
        <nav className=" flex justify-between">
        <div className="w-2/3">
        <CommandProvider />
        </div>
            <ul className="w-1/3 flex justify-evenly">
                <li>Messages</li>
                <li>Notifications</li>
                <li>Help</li>
            </ul>
        </nav>
    </header>
  )
}
