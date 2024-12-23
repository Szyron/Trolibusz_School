import Troli from "../assets/01.jpg";

function Main() {
  return (
    <div className="bg-red-200">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Troli})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-red-300 font-bold">
              Trolibusz hálózat
            </h1>
            <p className="mb-5">
              A trolibusz olyan közúti tömegközlekedési elektromos hajtású,
              gumikerekes jármű, amelyet áramszedők kapcsolnak a
              felsővezetékhez, amiből a mozgáshoz szükséges energiát kapja.
              Funkciója általában a közforgalmú autóbuszéhoz hasonló. A
              trolibusz közúti jármű; a KRESZ definíciója szerint „elektromos
              felsővezetékhez kötött gépkocsi”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
