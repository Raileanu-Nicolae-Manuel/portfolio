export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-2">
      <div className="w-11/12 h-fit flex justify-between rounded-md p-3 bg-[#040c27]">
        <span>Raileanu Manuel</span>
        <div className="flex gap-2">
          <span>About</span>
          <span>Projects</span>
          <span>Resume</span>
        </div>
      </div>
    </header>
  );
}
