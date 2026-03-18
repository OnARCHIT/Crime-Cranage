// HERO
<section
  ref={heroRef}
  className="relative h-[85vh] flex items-center justify-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="text-center px-6">

    {/* ✅ UPDATED LOGO */}
    <img
      src="/logo1.png"
      alt="S53 News Logo"
      className="h-16 mx-auto mb-4 opacity-90"
    />

    {/* BRAND */}
    <h1 className="text-5xl font-extrabold tracking-wide">
      S53 News
    </h1>

    <p className="mt-3 text-gray-300">
      Smart • Fast • Reliable News
    </p>

    <div className="mt-6 flex gap-4 justify-center flex-wrap">
      <Link to="/technology">
        <button className="bg-[#a00000] px-6 py-3 rounded-md hover:bg-[#8b0000] transition">
          Explore News
        </button>
      </Link>

      <Link to="/about">
        <button className="border border-[#333] px-6 py-3 rounded-md hover:bg-[#111] transition">
          About
        </button>
      </Link>
    </div>
  </div>
</section>
