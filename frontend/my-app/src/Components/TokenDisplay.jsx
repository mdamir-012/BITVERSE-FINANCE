import { useEffect, useState } from "react";
import "../styles/style_token.css";
import yBorder from "../assets/yellowborder.svg";
import btcIcon from "../assets/bitcoin.png";
import logo from "../assets/footer-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export function TokenDisplay() {
  const [tokenData, setTokenData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page,setPage]=useState(1);

  useEffect(() => {
    AOS.init();

    const fethcData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch("https://wandering-lime-parka.cyclic.app/token/read");
        let data = await response.json();
        console.log(data.tokenData);
        setTokenData(data.tokenData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fethcData();
  }, []);

  console.log(tokenData);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="token-display-container flex py-16 flex-col items-center gap-16"
    >
      {/* Token Display Header */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="header_box flex px-30 flex-col items-center gap-6"
      >
        <div className="header-relative">
          <h1>
            Our <span>Tokens</span>
          </h1>
          <img className="header-absolute" src={yBorder} alt="yellow-border" />
        </div>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
      </div>

      {/* Display Tokens */}
      {!isLoading && (
        <div className="token-container flex px-16 justify-center items-start content-start gap-x-12 gap-y-16 flex-wrap">
          {tokenData.map((token, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              key={index}
              className="token_box relative flex flex-col items-center gap-6"
            >
              <img
                className="token-img w-1/2 absolute"
                src={btcIcon}
                alt={token.decimals}
              />

              <div className="token_mid w-11/12">
                <h1>{token.name}</h1>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>Symbol</td>
                      <td>{token.symbol}</td>
                    </tr>
                    <tr>
                      <td>Decimals</td>
                      <td>{token.decimals}</td>
                    </tr>
                    <tr>
                      <td>Market Cap</td>
                      <td>{token.marketcap}</td>
                    </tr>
                    <tr>
                      <td>Blockchain</td>
                      <td>{token.chain}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex py-3 px-5 justify-center items-center gap-2">
                <p>Details</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M10.5 8.38843L14.5 12.3884L10.5 16.3884"
                      stroke="#1C1C1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Loading Animation */}
      {isLoading && (
        <img
          className="loading-image w-2/12 m-auto mb-72 block"
          src={logo}
          alt="loading"
        />
      )}

      {/* Pagination Section */}
      {!isLoading && (
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="pagination-section flex p-6 justify-center items-center gap-24"
        >
          <button onClick={()=>setPage(page-1)} disabled={page===1}>Previous</button>
          <p>Page {page} of 10</p>
          <button onClick={()=>setPage(page+1)} disabled={page===10}>Next</button>
        </div>
      )}
    </div>
  );
}
