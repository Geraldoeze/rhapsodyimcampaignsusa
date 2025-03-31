

const Header = () => {
  return (
    <div className="container mx-auto">
      <div
        className="py-4 flex justify-end gap-4"
        style={{ fontFamily: "Helvetica Neue" }}
      >
        <button
          className="border-2 py-1 px-4 border-stone-950 hover:border-[#d1a018] rounded "
          style={{
            fontFamily: "Oswald",
            fontWeight: "normal",
          }}
        >
          CREATE A CAMPAIGN
        </button>
        <button
          className="border-2 py-1 px-4 border-stone-950 hover:border-[#d1a018] rounded "
          style={{
            fontFamily: "Oswald",
            fontWeight: "normal",
          }}
        >
          LOGIN / REGISTER
        </button>
      </div>
    </div>
  );
};

export default Header;
