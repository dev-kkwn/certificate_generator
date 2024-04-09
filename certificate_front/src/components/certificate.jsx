import certificateLogo from "../assets/Whytap course completion certificate-04.png" 
function Certificate() {
  return (
    <>
      <section>
        <div className="bg-image">
                  <div>
                      <img src={certificateLogo} alt="certificate logo" />
                      <h1 className="text-2xl">Why Tap</h1>
          </div>
        </div>
      </section>
    </>
  );
}
export default Certificate;