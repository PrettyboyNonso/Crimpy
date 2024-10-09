export const Asset = ({
  crypto,
  prependDollarSign,
  formatNumberWithCommas,
}) => {
  return (
    <div className="assets">
      <div className="assets-child">
        <div className="asset-name">
          <div className="asset-img">
            <img src={crypto?.image?.large} alt="" />
          </div>
          <div className="name-symbol">
            <h4>{crypto?.symbol}</h4>
            <p>{crypto?.name}</p>
          </div>
        </div>

        <div className="asset-graph">{/* <AssetGraph /> */}</div>
        <div className="asset-price">
          <h4>{`$${formatNumberWithCommas(
            crypto?.market_data?.current_price?.usd.toFixed(1)
          )}`}</h4>

          <p
            style={{
              color:
                crypto?.market_data?.price_change_24h_in_currency?.usd > 0
                  ? "green"
                  : "red",
            }}
          >
            {Math.round(
              crypto?.market_data?.price_change_24h_in_currency?.usd * 10
            ) /
              10 >
            0
              ? `+$${crypto?.market_data?.price_change_24h_in_currency?.usd.toFixed(
                  1
                )} (${crypto?.market_data?.price_change_percentage_24h?.toFixed(
                  1
                )}%)`
              : `${prependDollarSign(
                  crypto?.market_data?.price_change_24h_in_currency?.usd
                )} (${crypto?.market_data?.price_change_percentage_24h?.toFixed(
                  2
                )}%)`}
          </p>
        </div>
      </div>
    </div>
  );
};
