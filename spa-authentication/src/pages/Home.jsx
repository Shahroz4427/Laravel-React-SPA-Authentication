
import Layout from '../layout/Layout';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home = () => {

  useDocumentTitle('Home');

  return (
    <Layout>
      <div className="row">
        <div className="col-xxl-8 mb-6 order-0">
          <div className="card">
            <div className="d-flex align-items-start row">
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title text-primary mb-3">
                    Congratulations John! 🎉
                  </h5>
                  <p className="mb-6">
                    You have done 72% more sales today.
                    <br />
                    Check your new badge in your profile.
                  </p>
                  <a  className="btn btn-sm btn-label-primary">
                    View Badges
                  </a>
                </div>
              </div>
              <div className="col-sm-5 text-center text-sm-left">
                <div className="card-body pb-0 px-0 px-md-6">
                  <img
                    src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop.png"
                    height={175}
                    className="scaleX-n1-rtl"
                    alt="View Badge User"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-lg-12 col-md-4 order-1">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-6 mb-6">
              <div className="card h-100">
                <div className="card-body pb-4">
                  <span className="d-block fw-medium mb-1">Order</span>
                  <h4 className="card-title mb-0">276k</h4>
                </div>
                <div
                  id="orderChart"
                  className="pb-3 pe-1"
                  style={{ minHeight: 80 }}
                >
                  <div
                    id="apexchartsn9owzgvpf"
                    className="apexcharts-canvas apexchartsn9owzgvpf apexcharts-theme-"
                    style={{ width: 206, height: 80 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      width={206}
                      height={80}
                    >
                      <foreignObject x={0} y={0} width={206} height={80}>
                        <div
                          className="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{ maxHeight: 40 }}
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                          }}
                        />
                      </foreignObject>
                      <rect
                        width={0}
                        height={0}
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fefefe"
                      />
                      <g
                        className="apexcharts-datalabels-group"
                        transform="translate(0, 0) scale(1)"
                      />
                      <g
                        className="apexcharts-datalabels-group"
                        transform="translate(0, 0) scale(1)"
                      />
                      <g
                        className="apexcharts-yaxis"
                        rel={0}
                        transform="translate(-18, 0)"
                      />
                      <g
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(4.666666666666667, 15)"
                      >
                        <defs>
                          <clipPath id="gridRectMaskn9owzgvpf">
                            <rect
                              width="194.33333333333334"
                              height="60.333333333333336"
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectBarMaskn9owzgvpf">
                            <rect
                              width="200.33333333333334"
                              height="66.33333333333334"
                              x={-3}
                              y={-3}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectMarkerMaskn9owzgvpf">
                            <rect
                              width="208.33333333333334"
                              height="74.33333333333334"
                              x={-7}
                              y={-7}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskn9owzgvpf" />
                          <clipPath id="nonForecastMaskn9owzgvpf" />
                          <linearGradient
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                            id="SvgjsLinearGradient1013"
                          >
                            <stop
                              stopOpacity="0.4"
                              stopColor="var(--bs-success)"
                              offset={0}
                            />
                            <stop
                              stopOpacity="0.4"
                              stopColor="var(--bs-paper-bg)"
                              offset={1}
                            />
                            <stop
                              stopOpacity="0.4"
                              stopColor="var(--bs-paper-bg)"
                              offset={1}
                            />
                          </linearGradient>
                        </defs>
                        <line
                          x1={0}
                          y1={0}
                          x2={0}
                          y2="60.333333333333336"
                          stroke="#b6b6b6"
                          strokeDasharray={3}
                          strokeLinecap="butt"
                          className="apexcharts-xcrosshairs"
                          x={0}
                          y={0}
                          width={1}
                          height="60.333333333333336"
                          fill="#b1b9c4"
                          filter="none"
                          fillOpacity="0.9"
                          strokeWidth={1}
                        />
                        <g className="apexcharts-grid">
                          <g
                            className="apexcharts-gridlines-horizontal"
                            style={{ display: "none" }}
                          >
                            <line
                              x1={0}
                              y1={0}
                              x2="194.33333333333334"
                              y2={0}
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              x1={0}
                              y1="30.166666666666668"
                              x2="194.33333333333334"
                              y2="30.166666666666668"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              x1={0}
                              y1="60.333333333333336"
                              x2="194.33333333333334"
                              y2="60.333333333333336"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g
                            className="apexcharts-gridlines-vertical"
                            style={{ display: "none" }}
                          />
                          <line
                            x1={0}
                            y1="60.333333333333336"
                            x2="194.33333333333334"
                            y2="60.333333333333336"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                          <line
                            x1={0}
                            y1={1}
                            x2={0}
                            y2="60.333333333333336"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g
                          className="apexcharts-grid-borders"
                          style={{ display: "none" }}
                        />
                        <g className="apexcharts-area-series apexcharts-plot-series">
                          <g
                            className="apexcharts-series"
                            zindex={0}
                            seriesname="series-1"
                            data:longestseries="true"
                            rel={1}
                            data:realindex={0}
                          >
                            <path
                              d="M 0 36.2C 11.336111111111112 36.2 21.05277777777778 37.708333333333336 32.38888888888889 37.708333333333336C 43.72500000000001 37.708333333333336 53.44166666666668 7.541666666666671 64.77777777777779 7.541666666666671C 76.1138888888889 7.541666666666671 85.83055555555556 48.266666666666666 97.16666666666667 48.266666666666666C 108.50277777777778 48.266666666666666 118.21944444444446 28.65833333333333 129.55555555555557 28.65833333333333C 140.89166666666668 28.65833333333333 150.60833333333335 33.18333333333333 161.94444444444446 33.18333333333333C 173.28055555555557 33.18333333333333 182.99722222222223 1.5083333333333258 194.33333333333334 1.5083333333333258C 194.33333333333334 1.5083333333333258 194.33333333333334 1.5083333333333258 194.33333333333334 60.333333333333336 L 0 60.333333333333336z"
                              fill="url(#SvgjsLinearGradient1013)"
                              fillOpacity={1}
                              stroke="none"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={0}
                              clipPath="url(#gridRectMaskn9owzgvpf)"
                              pathto="M 0 36.2C 11.336111111111112 36.2 21.05277777777778 37.708333333333336 32.38888888888889 37.708333333333336C 43.72500000000001 37.708333333333336 53.44166666666668 7.541666666666671 64.77777777777779 7.541666666666671C 76.1138888888889 7.541666666666671 85.83055555555556 48.266666666666666 97.16666666666667 48.266666666666666C 108.50277777777778 48.266666666666666 118.21944444444446 28.65833333333333 129.55555555555557 28.65833333333333C 140.89166666666668 28.65833333333333 150.60833333333335 33.18333333333333 161.94444444444446 33.18333333333333C 173.28055555555557 33.18333333333333 182.99722222222223 1.5083333333333258 194.33333333333334 1.5083333333333258C 194.33333333333334 1.5083333333333258 194.33333333333334 1.5083333333333258 194.33333333333334 60.333333333333336 L 0 60.333333333333336z"
                              pathfrom="M 0 60.333333333333336 L 0 60.333333333333336 L 32.38888888888889 60.333333333333336 L 64.77777777777779 60.333333333333336 L 97.16666666666667 60.333333333333336 L 129.55555555555557 60.333333333333336 L 161.94444444444446 60.333333333333336 L 194.33333333333334 60.333333333333336z"
                            />
                            <path
                              d="M 0 36.2C 11.336111111111112 36.2 21.05277777777778 37.708333333333336 32.38888888888889 37.708333333333336C 43.72500000000001 37.708333333333336 53.44166666666668 7.541666666666671 64.77777777777779 7.541666666666671C 76.1138888888889 7.541666666666671 85.83055555555556 48.266666666666666 97.16666666666667 48.266666666666666C 108.50277777777778 48.266666666666666 118.21944444444446 28.65833333333333 129.55555555555557 28.65833333333333C 140.89166666666668 28.65833333333333 150.60833333333335 33.18333333333333 161.94444444444446 33.18333333333333C 173.28055555555557 33.18333333333333 182.99722222222223 1.5083333333333258 194.33333333333334 1.5083333333333258"
                              fill="none"
                              fillOpacity={1}
                              stroke="var(--bs-success)"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={0}
                              clipPath="url(#gridRectMaskn9owzgvpf)"
                              pathto="M 0 36.2C 11.336111111111112 36.2 21.05277777777778 37.708333333333336 32.38888888888889 37.708333333333336C 43.72500000000001 37.708333333333336 53.44166666666668 7.541666666666671 64.77777777777779 7.541666666666671C 76.1138888888889 7.541666666666671 85.83055555555556 48.266666666666666 97.16666666666667 48.266666666666666C 108.50277777777778 48.266666666666666 118.21944444444446 28.65833333333333 129.55555555555557 28.65833333333333C 140.89166666666668 28.65833333333333 150.60833333333335 33.18333333333333 161.94444444444446 33.18333333333333C 173.28055555555557 33.18333333333333 182.99722222222223 1.5083333333333258 194.33333333333334 1.5083333333333258"
                              pathfrom="M 0 60.333333333333336 L 0 60.333333333333336 L 32.38888888888889 60.333333333333336 L 64.77777777777779 60.333333333333336 L 97.16666666666667 60.333333333333336 L 129.55555555555557 60.333333333333336 L 161.94444444444446 60.333333333333336 L 194.33333333333334 60.333333333333336"
                              fillRule="evenodd"
                            />
                            <g
                              className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realindex={0}
                            >
                              <g
                                className=""
                                clipPath="url(#gridRectMarkerMaskn9owzgvpf)"
                              >
                                <path
                                  d="M -1, 36.2 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                  fill="transparent"
                                  fillOpacity={1}
                                  stroke="transparent"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={4}
                                  strokeDasharray={0}
                                  cx={-1}
                                  cy="36.2"
                                  shape="circle"
                                  className="apexcharts-marker no-pointer-events wx8vvmlj1"
                                  rel={0}
                                  j={0}
                                  index={0}
                                  default-marker-size={6}
                                />
                                <path
                                  d="M 31.388888888888893, 37.708333333333336 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                  fill="transparent"
                                  fillOpacity={1}
                                  stroke="transparent"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={4}
                                  strokeDasharray={0}
                                  cx="31.388888888888893"
                                  cy="37.708333333333336"
                                  shape="circle"
                                  className="apexcharts-marker no-pointer-events w2icdjeeb"
                                  rel={1}
                                  j={1}
                                  index={0}
                                  default-marker-size={6}
                                />
                              </g>
                              <g
                                className=""
                                clipPath="url(#gridRectMarkerMaskn9owzgvpf)"
                              >
                                <path
                                  d="M 63.777777777777786, 7.541666666666671 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                  fill="transparent"
                                  fillOpacity={1}
                                  stroke="transparent"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={4}
                                  strokeDasharray={0}
                                  cx="63.777777777777786"
                                  cy="7.541666666666671"
                                  shape="circle"
                                  className="apexcharts-marker no-pointer-events wbxlvhhzbh"
                                  rel={2}
                                  j={2}
                                  index={0}
                                  default-marker-size={6}
                                />
                              </g>
                              <g
                                className=""
                                clipPath="url(#gridRectMarkerMaskn9owzgvpf)"
                              >
                                <path
                                  d="M 96.16666666666667, 48.266666666666666 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                  fill="transparent"
                                  fillOpacity={1}
                                  stroke="transparent"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={4}
                                  strokeDasharray={0}
                                  cx="96.16666666666667"
                                  cy="48.266666666666666"
                                  shape="circle"
                                  className="apexcharts-marker no-pointer-events wqe5r5k6f"
                                  rel={3}
                                  j={3}
                                  index={0}
                                  default-marker-size={6}
                                />
                              </g>
                              <g
                                className=""
                                clipPath="url(#gridRectMarkerMaskn9owzgvpf)"
                              >
                                <path
                                  d="M 128.55555555555557, 28.65833333333333 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                  fill="transparent"
                                  fillOpacity={1}
                                  stroke="transparent"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={4}
                                  strokeDasharray={0}
                                  cx="128.55555555555557"
                                  cy="28.65833333333333"
                                  shape="circle"
                                  className="apexcharts-marker no-pointer-events wjsp3swvqg"
                                  rel={4}
                                  j={4}
                                  index={0}
                                  default-marker-size={6}
                                />
                              </g>
                              <g
                                className=""
                                clipPath="url(#gridRectMarkerMaskn9owzgvpf)"
                              >
                                <path
                                  d="M 160.94444444444446, 33.18333333333333 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                  fill="transparent"
                                  fillOpacity={1}
                                  stroke="transparent"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={4}
                                  strokeDasharray={0}
                                  cx="160.94444444444446"
                                  cy="33.18333333333333"
                                  shape="circle"
                                  className="apexcharts-marker no-pointer-events w5tiwjd9a"
                                  rel={5}
                                  j={5}
                                  index={0}
                                  default-marker-size={6}
                                />
                              </g>
                              <g
                                className=""
                                clipPath="url(#gridRectMarkerMaskn9owzgvpf)"
                              >
                                <path
                                  d="M 193.33333333333334, 1.5083333333333258 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                  fill="var(--bs-paper-bg)"
                                  fillOpacity={1}
                                  stroke="var(--bs-success)"
                                  strokeOpacity="0.9"
                                  strokeLinecap="butt"
                                  strokeWidth={4}
                                  strokeDasharray={0}
                                  cx="193.33333333333334"
                                  cy="1.5083333333333258"
                                  shape="circle"
                                  className="apexcharts-marker no-pointer-events wmud2z84u"
                                  rel={6}
                                  j={6}
                                  index={0}
                                  default-marker-size={6}
                                />
                              </g>
                            </g>
                          </g>
                          <g className="apexcharts-datalabels" data:realindex={0} />
                        </g>
                        <line
                          x1={0}
                          y1={0}
                          x2="194.33333333333334"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          x1={0}
                          y1={0}
                          x2="194.33333333333334"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                        <g className="apexcharts-xaxis" transform="translate(0, 0)">
                          <g
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          />
                        </g>
                        <g className="apexcharts-yaxis-annotations" />
                        <g className="apexcharts-xaxis-annotations" />
                        <g className="apexcharts-point-annotations" />
                      </g>
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-light">
                      <div
                        className="apexcharts-tooltip-title"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      />
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "var(--bs-success)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-6 mb-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between mb-4">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/wallet-info.png"
                        alt="wallet info"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt6"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base bx bx-dots-vertical-rounded text-body-secondary" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt6"
                      >
                        <a className="dropdown-item" >
                          View More
                        </a>
                        <a className="dropdown-item" >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="mb-1">Sales</p>
                  <h4 className="card-title mb-3">$4,679</h4>
                  <small className="text-success fw-medium">
                    <i className="icon-base bx bx-up-arrow-alt" /> +28.42%
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Total Revenue */}
        <div className="col-12 col-xxl-8 order-2 order-md-3 order-xxl-2 mb-6">
          <div className="card">
            <div className="row row-bordered g-0">
              <div className="col-lg-8">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <div className="card-title mb-0">
                    <h5 className="m-0 me-2">Total Revenue</h5>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="totalRevenue"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-base bx bx-dots-vertical-rounded icon-lg text-body-secondary" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="totalRevenue"
                    >
                      <a className="dropdown-item" >
                        Select All
                      </a>
                      <a className="dropdown-item" >
                        Refresh
                      </a>
                      <a className="dropdown-item" >
                        Share
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="totalRevenueChart"
                  className="px-3"
                  style={{ minHeight: 315 }}
                >
                  <div
                    id="apexcharts43v3uido"
                    className="apexcharts-canvas apexcharts43v3uido apexcharts-theme-"
                    style={{ width: 587, height: 300 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      width={587}
                      height={300}
                    >
                      <foreignObject x={0} y={0} width={587} height={300}>
                        <div
                          className="apexcharts-legend apexcharts-align-left apx-legend-position-top"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            right: 0,
                            position: "absolute",
                            left: 0,
                            top: 4,
                            maxHeight: 150
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            rel={1}
                            seriesname={2024}
                            data:collapsed="false"
                            style={{ margin: "4px 10px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={1}
                              data:collapsed="false"
                              style={{ height: 8, width: 8, left: 0, top: 0 }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="100%"
                                height="100%"
                              >
                                <path
                                  d="M 0, 0 
        m -4, 0 
        a 4,4 0 1,0 8,0 
        a 4,4 0 1,0 -8,0"
                                  fill="var(--bs-primary)"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity="0.9"
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  cx={0}
                                  cy={0}
                                  shape="circle"
                                  className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                                  style={{ transform: "translate(50%, 50%)" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="apexcharts-legend-text"
                              rel={1}
                              i={0}
                              data:default-text={2024}
                              data:collapsed="false"
                              style={{
                                color: "var(--bs-body-color)",
                                fontSize: 13,
                                fontWeight: 400,
                                fontFamily: "var(--bs-font-family-base)"
                              }}
                            >
                              2024
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={2}
                            seriesname={2023}
                            data:collapsed="false"
                            style={{ margin: "4px 10px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={2}
                              data:collapsed="false"
                              style={{ height: 8, width: 8, left: 0, top: 0 }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="100%"
                                height="100%"
                              >
                                <path
                                  d="M 0, 0 
        m -4, 0 
        a 4,4 0 1,0 8,0 
        a 4,4 0 1,0 -8,0"
                                  fill="var(--bs-info)"
                                  fillOpacity={1}
                                  stroke="#ffffff"
                                  strokeOpacity="0.9"
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  cx={0}
                                  cy={0}
                                  shape="circle"
                                  className="apexcharts-legend-marker apexcharts-marker apexcharts-marker-circle"
                                  style={{ transform: "translate(50%, 50%)" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="apexcharts-legend-text"
                              rel={2}
                              i={1}
                              data:default-text={2023}
                              data:collapsed="false"
                              style={{
                                color: "var(--bs-body-color)",
                                fontSize: 13,
                                fontWeight: 400,
                                fontFamily: "var(--bs-font-family-base)"
                              }}
                            >
                              2023
                            </span>
                          </div>
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                          }}
                        />
                      </foreignObject>
                      <g
                        className="apexcharts-datalabels-group"
                        transform="translate(0, 0) scale(1)"
                      />
                      <g
                        className="apexcharts-datalabels-group"
                        transform="translate(0, 0) scale(1)"
                      />
                      <g
                        className="apexcharts-yaxis"
                        rel={0}
                        transform="translate(14.215347290039062, 0)"
                      >
                        <g className="apexcharts-yaxis-texts-g">
                          <text
                            x={20}
                            y="57.333333333333336"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="13px"
                            fontFamily="var(--bs-font-family-base)"
                            fontWeight={400}
                            fill="var(--bs-secondary-color)"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "var(--bs-font-family-base)" }}
                          >
                            <tspan>30</tspan>
                            <title>30</title>
                          </text>
                          <text
                            x={20}
                            y="100.47933333333333"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="13px"
                            fontFamily="var(--bs-font-family-base)"
                            fontWeight={400}
                            fill="var(--bs-secondary-color)"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "var(--bs-font-family-base)" }}
                          >
                            <tspan>20</tspan>
                            <title>20</title>
                          </text>
                          <text
                            x={20}
                            y="143.62533333333334"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="13px"
                            fontFamily="var(--bs-font-family-base)"
                            fontWeight={400}
                            fill="var(--bs-secondary-color)"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "var(--bs-font-family-base)" }}
                          >
                            <tspan>10</tspan>
                            <title>10</title>
                          </text>
                          <text
                            x={20}
                            y="186.77133333333336"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="13px"
                            fontFamily="var(--bs-font-family-base)"
                            fontWeight={400}
                            fill="var(--bs-secondary-color)"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "var(--bs-font-family-base)" }}
                          >
                            <tspan>0</tspan>
                            <title>0</title>
                          </text>
                          <text
                            x={20}
                            y="229.91733333333337"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="13px"
                            fontFamily="var(--bs-font-family-base)"
                            fontWeight={400}
                            fill="var(--bs-secondary-color)"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "var(--bs-font-family-base)" }}
                          >
                            <tspan>-10</tspan>
                            <title>-10</title>
                          </text>
                          <text
                            x={20}
                            y="273.0633333333334"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="13px"
                            fontFamily="var(--bs-font-family-base)"
                            fontWeight={400}
                            fill="var(--bs-secondary-color)"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "var(--bs-font-family-base)" }}
                          >
                            <tspan>-20</tspan>
                            <title>-20</title>
                          </text>
                        </g>
                      </g>
                      <g
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(52.21534729003906, 53)"
                      >
                        <defs>
                          <linearGradient
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                            id="SvgjsLinearGradient1014"
                          >
                            <stop
                              stopOpacity="0.4"
                              stopColor="rgba(216,227,240,0.4)"
                              offset={0}
                            />
                            <stop
                              stopOpacity="0.5"
                              stopColor="rgba(190,209,230,0.5)"
                              offset={1}
                            />
                            <stop
                              stopOpacity="0.5"
                              stopColor="rgba(190,209,230,0.5)"
                              offset={1}
                            />
                          </linearGradient>
                          <clipPath id="gridRectMask43v3uido">
                            <rect
                              width="514.7846527099609"
                              height="215.73"
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectBarMask43v3uido">
                            <rect
                              width="524.7846527099609"
                              height="225.73"
                              x={-5}
                              y={-5}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectMarkerMask43v3uido">
                            <rect
                              width="514.7846527099609"
                              height="215.73"
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMask43v3uido" />
                          <clipPath id="nonForecastMask43v3uido" />
                        </defs>
                        <rect
                          width="22.06219940185547"
                          height="215.73"
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="#b6b6b6"
                          strokeDasharray={3}
                          fill="url(#SvgjsLinearGradient1014)"
                          className="apexcharts-xcrosshairs"
                          y2="215.73"
                          filter="none"
                          fillOpacity="0.9"
                        />
                        <g className="apexcharts-grid">
                          <g className="apexcharts-gridlines-horizontal">
                            <line
                              x1={0}
                              y1="43.146"
                              x2="514.7846527099609"
                              y2="43.146"
                              stroke="var(--bs-border-color)"
                              strokeDasharray={7}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              x1={0}
                              y1="86.292"
                              x2="514.7846527099609"
                              y2="86.292"
                              stroke="var(--bs-border-color)"
                              strokeDasharray={7}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              x1={0}
                              y1="129.438"
                              x2="514.7846527099609"
                              y2="129.438"
                              stroke="var(--bs-border-color)"
                              strokeDasharray={7}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              x1={0}
                              y1="172.584"
                              x2="514.7846527099609"
                              y2="172.584"
                              stroke="var(--bs-border-color)"
                              strokeDasharray={7}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              x1={0}
                              y1="215.73000000000002"
                              x2="514.7846527099609"
                              y2="215.73000000000002"
                              stroke="var(--bs-border-color)"
                              strokeDasharray={7}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g className="apexcharts-gridlines-vertical" />
                          <line
                            x1={0}
                            y1="215.73"
                            x2="514.7846527099609"
                            y2="215.73"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                          <line
                            x1={0}
                            y1={1}
                            x2={0}
                            y2="215.73"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g className="apexcharts-grid-borders">
                          <line
                            x1={0}
                            y1={0}
                            x2="514.7846527099609"
                            y2={0}
                            stroke="var(--bs-border-color)"
                            strokeDasharray={7}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                        </g>
                        <g className="apexcharts-bar-series apexcharts-plot-series">
                          <g
                            className="apexcharts-series"
                            seriesname={2024}
                            rel={1}
                            data:realindex={0}
                          >
                            <path
                              d="M 28.73923263549805 118.439 L 28.73923263549805 62.776199999999996 C 28.73923263549805 58.776199999999996 32.73923263549805 54.776199999999996 36.73923263549805 54.776199999999996 L 36.80143203735352 54.776199999999996 C 40.80143203735352 54.776199999999996 44.80143203735352 58.776199999999996 44.80143203735352 62.776199999999996 L 44.80143203735352 118.439 C 44.80143203735352 122.439 40.80143203735352 126.439 36.80143203735352 126.439 L 36.73923263549805 126.439 C 32.73923263549805 126.439 28.73923263549805 122.439 28.73923263549805 118.439 Z "
                              fill="var(--bs-primary)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={0}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 28.73923263549805 118.439 L 28.73923263549805 62.776199999999996 C 28.73923263549805 58.776199999999996 32.73923263549805 54.776199999999996 36.73923263549805 54.776199999999996 L 36.80143203735352 54.776199999999996 C 40.80143203735352 54.776199999999996 44.80143203735352 58.776199999999996 44.80143203735352 62.776199999999996 L 44.80143203735352 118.439 C 44.80143203735352 122.439 40.80143203735352 126.439 36.80143203735352 126.439 L 36.73923263549805 126.439 C 32.73923263549805 126.439 28.73923263549805 122.439 28.73923263549805 118.439 Z "
                              pathfrom="M 28.73923263549805 126.439 L 28.73923263549805 126.439 L 44.80143203735352 126.439 L 44.80143203735352 126.439 L 44.80143203735352 126.439 L 44.80143203735352 126.439 L 44.80143203735352 126.439 L 28.73923263549805 126.439 Z"
                              cy="51.7752"
                              cx="96.2798973083496"
                              j={0}
                              val={18}
                              barheight="77.66279999999999"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 102.2798973083496 118.439 L 102.2798973083496 110.23679999999999 C 102.2798973083496 106.23679999999999 106.2798973083496 102.23679999999999 110.2798973083496 102.23679999999999 L 110.34209671020507 102.23679999999999 C 114.34209671020507 102.23679999999999 118.34209671020507 106.23679999999999 118.34209671020507 110.23679999999999 L 118.34209671020507 118.439 C 118.34209671020507 122.439 114.34209671020507 126.439 110.34209671020507 126.439 L 110.2798973083496 126.439 C 106.2798973083496 126.439 102.2798973083496 122.439 102.2798973083496 118.439 Z "
                              fill="var(--bs-primary)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={0}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 102.2798973083496 118.439 L 102.2798973083496 110.23679999999999 C 102.2798973083496 106.23679999999999 106.2798973083496 102.23679999999999 110.2798973083496 102.23679999999999 L 110.34209671020507 102.23679999999999 C 114.34209671020507 102.23679999999999 118.34209671020507 106.23679999999999 118.34209671020507 110.23679999999999 L 118.34209671020507 118.439 C 118.34209671020507 122.439 114.34209671020507 126.439 110.34209671020507 126.439 L 110.2798973083496 126.439 C 106.2798973083496 126.439 102.2798973083496 122.439 102.2798973083496 118.439 Z "
                              pathfrom="M 102.2798973083496 126.439 L 102.2798973083496 126.439 L 118.34209671020507 126.439 L 118.34209671020507 126.439 L 118.34209671020507 126.439 L 118.34209671020507 126.439 L 118.34209671020507 126.439 L 102.2798973083496 126.439 Z"
                              cy="99.23579999999998"
                              cx="169.82056198120117"
                              j={1}
                              val={7}
                              barheight="30.202199999999998"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 175.82056198120117 118.439 L 175.82056198120117 75.72 C 175.82056198120117 71.72 179.82056198120117 67.72 183.82056198120117 67.72 L 183.88276138305665 67.72 C 187.88276138305665 67.72 191.88276138305665 71.72 191.88276138305665 75.72 L 191.88276138305665 118.439 C 191.88276138305665 122.439 187.88276138305665 126.439 183.88276138305665 126.439 L 183.82056198120117 126.439 C 179.82056198120117 126.439 175.82056198120117 122.439 175.82056198120117 118.439 Z "
                              fill="var(--bs-primary)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={0}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 175.82056198120117 118.439 L 175.82056198120117 75.72 C 175.82056198120117 71.72 179.82056198120117 67.72 183.82056198120117 67.72 L 183.88276138305665 67.72 C 187.88276138305665 67.72 191.88276138305665 71.72 191.88276138305665 75.72 L 191.88276138305665 118.439 C 191.88276138305665 122.439 187.88276138305665 126.439 183.88276138305665 126.439 L 183.82056198120117 126.439 C 179.82056198120117 126.439 175.82056198120117 122.439 175.82056198120117 118.439 Z "
                              pathfrom="M 175.82056198120117 126.439 L 175.82056198120117 126.439 L 191.88276138305665 126.439 L 191.88276138305665 126.439 L 191.88276138305665 126.439 L 191.88276138305665 126.439 L 191.88276138305665 126.439 L 175.82056198120117 126.439 Z"
                              cy="64.719"
                              cx="243.36122665405273"
                              j={2}
                              val={15}
                              barheight="64.719"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 249.36122665405273 118.439 L 249.36122665405273 15.315599999999998 C 249.36122665405273 11.315599999999998 253.36122665405276 7.315599999999998 257.36122665405276 7.315599999999998 L 257.4234260559082 7.315599999999998 C 261.4234260559082 7.315599999999998 265.4234260559082 11.315599999999998 265.4234260559082 15.315599999999998 L 265.4234260559082 118.439 C 265.4234260559082 122.439 261.4234260559082 126.439 257.4234260559082 126.439 L 257.36122665405276 126.439 C 253.36122665405276 126.439 249.36122665405273 122.439 249.36122665405273 118.439 Z "
                              fill="var(--bs-primary)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={0}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 249.36122665405273 118.439 L 249.36122665405273 15.315599999999998 C 249.36122665405273 11.315599999999998 253.36122665405276 7.315599999999998 257.36122665405276 7.315599999999998 L 257.4234260559082 7.315599999999998 C 261.4234260559082 7.315599999999998 265.4234260559082 11.315599999999998 265.4234260559082 15.315599999999998 L 265.4234260559082 118.439 C 265.4234260559082 122.439 261.4234260559082 126.439 257.4234260559082 126.439 L 257.36122665405276 126.439 C 253.36122665405276 126.439 249.36122665405273 122.439 249.36122665405273 118.439 Z "
                              pathfrom="M 249.36122665405273 126.439 L 249.36122665405273 126.439 L 265.4234260559082 126.439 L 265.4234260559082 126.439 L 265.4234260559082 126.439 L 265.4234260559082 126.439 L 265.4234260559082 126.439 L 249.36122665405273 126.439 Z"
                              cy="4.314599999999999"
                              cx="316.9018913269043"
                              j={3}
                              val={29}
                              barheight="125.12339999999999"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 322.9018913269043 118.439 L 322.9018913269043 62.776199999999996 C 322.9018913269043 58.776199999999996 326.9018913269043 54.776199999999996 330.9018913269043 54.776199999999996 L 330.9640907287598 54.776199999999996 C 334.9640907287598 54.776199999999996 338.9640907287598 58.776199999999996 338.9640907287598 62.776199999999996 L 338.9640907287598 118.439 C 338.9640907287598 122.439 334.9640907287598 126.439 330.9640907287598 126.439 L 330.9018913269043 126.439 C 326.9018913269043 126.439 322.9018913269043 122.439 322.9018913269043 118.439 Z "
                              fill="var(--bs-primary)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={0}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 322.9018913269043 118.439 L 322.9018913269043 62.776199999999996 C 322.9018913269043 58.776199999999996 326.9018913269043 54.776199999999996 330.9018913269043 54.776199999999996 L 330.9640907287598 54.776199999999996 C 334.9640907287598 54.776199999999996 338.9640907287598 58.776199999999996 338.9640907287598 62.776199999999996 L 338.9640907287598 118.439 C 338.9640907287598 122.439 334.9640907287598 126.439 330.9640907287598 126.439 L 330.9018913269043 126.439 C 326.9018913269043 126.439 322.9018913269043 122.439 322.9018913269043 118.439 Z "
                              pathfrom="M 322.9018913269043 126.439 L 322.9018913269043 126.439 L 338.9640907287598 126.439 L 338.9640907287598 126.439 L 338.9640907287598 126.439 L 338.9640907287598 126.439 L 338.9640907287598 126.439 L 322.9018913269043 126.439 Z"
                              cy="51.7752"
                              cx="390.4425559997559"
                              j={4}
                              val={18}
                              barheight="77.66279999999999"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 396.4425559997559 118.439 L 396.4425559997559 88.6638 C 396.4425559997559 84.6638 400.4425559997559 80.6638 404.4425559997559 80.6638 L 404.50475540161136 80.6638 C 408.50475540161136 80.6638 412.50475540161136 84.6638 412.50475540161136 88.6638 L 412.50475540161136 118.439 C 412.50475540161136 122.439 408.50475540161136 126.439 404.50475540161136 126.439 L 404.4425559997559 126.439 C 400.4425559997559 126.439 396.4425559997559 122.439 396.4425559997559 118.439 Z "
                              fill="var(--bs-primary)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={0}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 396.4425559997559 118.439 L 396.4425559997559 88.6638 C 396.4425559997559 84.6638 400.4425559997559 80.6638 404.4425559997559 80.6638 L 404.50475540161136 80.6638 C 408.50475540161136 80.6638 412.50475540161136 84.6638 412.50475540161136 88.6638 L 412.50475540161136 118.439 C 412.50475540161136 122.439 408.50475540161136 126.439 404.50475540161136 126.439 L 404.4425559997559 126.439 C 400.4425559997559 126.439 396.4425559997559 122.439 396.4425559997559 118.439 Z "
                              pathfrom="M 396.4425559997559 126.439 L 396.4425559997559 126.439 L 412.50475540161136 126.439 L 412.50475540161136 126.439 L 412.50475540161136 126.439 L 412.50475540161136 126.439 L 412.50475540161136 126.439 L 396.4425559997559 126.439 Z"
                              cy="77.66279999999999"
                              cx="463.98322067260744"
                              j={5}
                              val={12}
                              barheight="51.7752"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 469.98322067260744 118.439 L 469.98322067260744 101.60759999999999 C 469.98322067260744 97.60759999999999 473.98322067260744 93.60759999999999 477.98322067260744 93.60759999999999 L 478.0454200744629 93.60759999999999 C 482.0454200744629 93.60759999999999 486.0454200744629 97.60759999999999 486.0454200744629 101.60759999999999 L 486.0454200744629 118.439 C 486.0454200744629 122.439 482.0454200744629 126.439 478.0454200744629 126.439 L 477.98322067260744 126.439 C 473.98322067260744 126.439 469.98322067260744 122.439 469.98322067260744 118.439 Z "
                              fill="var(--bs-primary)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={0}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 469.98322067260744 118.439 L 469.98322067260744 101.60759999999999 C 469.98322067260744 97.60759999999999 473.98322067260744 93.60759999999999 477.98322067260744 93.60759999999999 L 478.0454200744629 93.60759999999999 C 482.0454200744629 93.60759999999999 486.0454200744629 97.60759999999999 486.0454200744629 101.60759999999999 L 486.0454200744629 118.439 C 486.0454200744629 122.439 482.0454200744629 126.439 478.0454200744629 126.439 L 477.98322067260744 126.439 C 473.98322067260744 126.439 469.98322067260744 122.439 469.98322067260744 118.439 Z "
                              pathfrom="M 469.98322067260744 126.439 L 469.98322067260744 126.439 L 486.0454200744629 126.439 L 486.0454200744629 126.439 L 486.0454200744629 126.439 L 486.0454200744629 126.439 L 486.0454200744629 126.439 L 469.98322067260744 126.439 Z"
                              cy="90.60659999999999"
                              cx="537.523885345459"
                              j={6}
                              val={9}
                              barheight="38.831399999999995"
                              barwidth="22.06219940185547"
                            />
                            <g className="apexcharts-bar-goals-markers">
                              <g
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g

                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g

                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                            </g>
                          </g>
                          <g
                            className="apexcharts-series"
                            seriesname={2023}
                            rel={2}
                            data:realindex={1}
                          >
                            <path
                              d="M 28.73923263549805 140.44 L 28.73923263549805 174.5298 C 28.73923263549805 178.5298 32.73923263549805 182.5298 36.73923263549805 182.5298 L 36.80143203735352 182.5298 C 40.80143203735352 182.5298 44.80143203735352 178.5298 44.80143203735352 174.5298 L 44.80143203735352 140.44 C 44.80143203735352 136.44 40.80143203735352 132.44 36.80143203735352 132.44 L 36.73923263549805 132.44 C 32.73923263549805 132.44 28.73923263549805 136.44 28.73923263549805 140.44 Z "
                              fill="var(--bs-info)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={1}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 28.73923263549805 140.44 L 28.73923263549805 174.5298 C 28.73923263549805 178.5298 32.73923263549805 182.5298 36.73923263549805 182.5298 L 36.80143203735352 182.5298 C 40.80143203735352 182.5298 44.80143203735352 178.5298 44.80143203735352 174.5298 L 44.80143203735352 140.44 C 44.80143203735352 136.44 40.80143203735352 132.44 36.80143203735352 132.44 L 36.73923263549805 132.44 C 32.73923263549805 132.44 28.73923263549805 136.44 28.73923263549805 140.44 Z "
                              pathfrom="M 28.73923263549805 132.44 L 28.73923263549805 132.44 L 44.80143203735352 132.44 L 44.80143203735352 132.44 L 44.80143203735352 132.44 L 44.80143203735352 132.44 L 44.80143203735352 132.44 L 28.73923263549805 132.44 Z"
                              cy="185.5288"
                              cx="96.2798973083496"
                              j={0}
                              val={-13}
                              barheight="-56.0898"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 102.2798973083496 140.44 L 102.2798973083496 196.10279999999997 C 102.2798973083496 200.10279999999997 106.2798973083496 204.10279999999997 110.2798973083496 204.10279999999997 L 110.34209671020507 204.10279999999997 C 114.34209671020507 204.10279999999997 118.34209671020507 200.10279999999997 118.34209671020507 196.10279999999997 L 118.34209671020507 140.44 C 118.34209671020507 136.44 114.34209671020507 132.44 110.34209671020507 132.44 L 110.2798973083496 132.44 C 106.2798973083496 132.44 102.2798973083496 136.44 102.2798973083496 140.44 Z "
                              fill="var(--bs-info)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={1}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 102.2798973083496 140.44 L 102.2798973083496 196.10279999999997 C 102.2798973083496 200.10279999999997 106.2798973083496 204.10279999999997 110.2798973083496 204.10279999999997 L 110.34209671020507 204.10279999999997 C 114.34209671020507 204.10279999999997 118.34209671020507 200.10279999999997 118.34209671020507 196.10279999999997 L 118.34209671020507 140.44 C 118.34209671020507 136.44 114.34209671020507 132.44 110.34209671020507 132.44 L 110.2798973083496 132.44 C 106.2798973083496 132.44 102.2798973083496 136.44 102.2798973083496 140.44 Z "
                              pathfrom="M 102.2798973083496 132.44 L 102.2798973083496 132.44 L 118.34209671020507 132.44 L 118.34209671020507 132.44 L 118.34209671020507 132.44 L 118.34209671020507 132.44 L 118.34209671020507 132.44 L 102.2798973083496 132.44 Z"
                              cy="207.10179999999997"
                              cx="169.82056198120117"
                              j={1}
                              val={-18}
                              barheight="-77.66279999999999"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 175.82056198120117 140.44 L 175.82056198120117 157.2714 C 175.82056198120117 161.2714 179.82056198120117 165.2714 183.82056198120117 165.2714 L 183.88276138305665 165.2714 C 187.88276138305665 165.2714 191.88276138305665 161.2714 191.88276138305665 157.2714 L 191.88276138305665 140.44 C 191.88276138305665 136.44 187.88276138305665 132.44 183.88276138305665 132.44 L 183.82056198120117 132.44 C 179.82056198120117 132.44 175.82056198120117 136.44 175.82056198120117 140.44 Z "
                              fill="var(--bs-info)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={1}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 175.82056198120117 140.44 L 175.82056198120117 157.2714 C 175.82056198120117 161.2714 179.82056198120117 165.2714 183.82056198120117 165.2714 L 183.88276138305665 165.2714 C 187.88276138305665 165.2714 191.88276138305665 161.2714 191.88276138305665 157.2714 L 191.88276138305665 140.44 C 191.88276138305665 136.44 187.88276138305665 132.44 183.88276138305665 132.44 L 183.82056198120117 132.44 C 179.82056198120117 132.44 175.82056198120117 136.44 175.82056198120117 140.44 Z "
                              pathfrom="M 175.82056198120117 132.44 L 175.82056198120117 132.44 L 191.88276138305665 132.44 L 191.88276138305665 132.44 L 191.88276138305665 132.44 L 191.88276138305665 132.44 L 191.88276138305665 132.44 L 175.82056198120117 132.44 Z"
                              cy="168.2704"
                              cx="243.36122665405273"
                              j={2}
                              val={-9}
                              barheight="-38.831399999999995"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 249.36122665405273 140.44 L 249.36122665405273 178.84439999999998 C 249.36122665405273 182.84439999999998 253.36122665405276 186.84439999999998 257.36122665405276 186.84439999999998 L 257.4234260559082 186.84439999999998 C 261.4234260559082 186.84439999999998 265.4234260559082 182.84439999999998 265.4234260559082 178.84439999999998 L 265.4234260559082 140.44 C 265.4234260559082 136.44 261.4234260559082 132.44 257.4234260559082 132.44 L 257.36122665405276 132.44 C 253.36122665405276 132.44 249.36122665405273 136.44 249.36122665405273 140.44 Z "
                              fill="var(--bs-info)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={1}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 249.36122665405273 140.44 L 249.36122665405273 178.84439999999998 C 249.36122665405273 182.84439999999998 253.36122665405276 186.84439999999998 257.36122665405276 186.84439999999998 L 257.4234260559082 186.84439999999998 C 261.4234260559082 186.84439999999998 265.4234260559082 182.84439999999998 265.4234260559082 178.84439999999998 L 265.4234260559082 140.44 C 265.4234260559082 136.44 261.4234260559082 132.44 257.4234260559082 132.44 L 257.36122665405276 132.44 C 253.36122665405276 132.44 249.36122665405273 136.44 249.36122665405273 140.44 Z "
                              pathfrom="M 249.36122665405273 132.44 L 249.36122665405273 132.44 L 265.4234260559082 132.44 L 265.4234260559082 132.44 L 265.4234260559082 132.44 L 265.4234260559082 132.44 L 265.4234260559082 132.44 L 249.36122665405273 132.44 Z"
                              cy="189.84339999999997"
                              cx="316.9018913269043"
                              j={3}
                              val={-14}
                              barheight="-60.404399999999995"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 322.9018913269043 140.44 L 322.9018913269043 152.9568 C 322.9018913269043 156.9568 326.9018913269043 160.9568 330.9018913269043 160.9568 L 330.9640907287598 160.9568 C 334.9640907287598 160.9568 338.9640907287598 156.9568 338.9640907287598 152.9568 L 338.9640907287598 140.44 C 338.9640907287598 136.44 334.9640907287598 132.44 330.9640907287598 132.44 L 330.9018913269043 132.44 C 326.9018913269043 132.44 322.9018913269043 136.44 322.9018913269043 140.44 Z "
                              fill="var(--bs-info)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={1}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 322.9018913269043 140.44 L 322.9018913269043 152.9568 C 322.9018913269043 156.9568 326.9018913269043 160.9568 330.9018913269043 160.9568 L 330.9640907287598 160.9568 C 334.9640907287598 160.9568 338.9640907287598 156.9568 338.9640907287598 152.9568 L 338.9640907287598 140.44 C 338.9640907287598 136.44 334.9640907287598 132.44 330.9640907287598 132.44 L 330.9018913269043 132.44 C 326.9018913269043 132.44 322.9018913269043 136.44 322.9018913269043 140.44 Z "
                              pathfrom="M 322.9018913269043 132.44 L 322.9018913269043 132.44 L 338.9640907287598 132.44 L 338.9640907287598 132.44 L 338.9640907287598 132.44 L 338.9640907287598 132.44 L 338.9640907287598 132.44 L 322.9018913269043 132.44 Z"
                              cy="163.95579999999998"
                              cx="390.4425559997559"
                              j={4}
                              val={-8}
                              barheight="-34.516799999999996"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 396.4425559997559 140.44 L 396.4425559997559 191.7882 C 396.4425559997559 195.7882 400.4425559997559 199.7882 404.4425559997559 199.7882 L 404.50475540161136 199.7882 C 408.50475540161136 199.7882 412.50475540161136 195.7882 412.50475540161136 191.7882 L 412.50475540161136 140.44 C 412.50475540161136 136.44 408.50475540161136 132.44 404.50475540161136 132.44 L 404.4425559997559 132.44 C 400.4425559997559 132.44 396.4425559997559 136.44 396.4425559997559 140.44 Z "
                              fill="var(--bs-info)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={1}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 396.4425559997559 140.44 L 396.4425559997559 191.7882 C 396.4425559997559 195.7882 400.4425559997559 199.7882 404.4425559997559 199.7882 L 404.50475540161136 199.7882 C 408.50475540161136 199.7882 412.50475540161136 195.7882 412.50475540161136 191.7882 L 412.50475540161136 140.44 C 412.50475540161136 136.44 408.50475540161136 132.44 404.50475540161136 132.44 L 404.4425559997559 132.44 C 400.4425559997559 132.44 396.4425559997559 136.44 396.4425559997559 140.44 Z "
                              pathfrom="M 396.4425559997559 132.44 L 396.4425559997559 132.44 L 412.50475540161136 132.44 L 412.50475540161136 132.44 L 412.50475540161136 132.44 L 412.50475540161136 132.44 L 412.50475540161136 132.44 L 396.4425559997559 132.44 Z"
                              cy="202.78719999999998"
                              cx="463.98322067260744"
                              j={5}
                              val={-17}
                              barheight="-73.34819999999999"
                              barwidth="22.06219940185547"
                            />
                            <path
                              d="M 469.98322067260744 140.44 L 469.98322067260744 183.159 C 469.98322067260744 187.159 473.98322067260744 191.159 477.98322067260744 191.159 L 478.0454200744629 191.159 C 482.0454200744629 191.159 486.0454200744629 187.159 486.0454200744629 183.159 L 486.0454200744629 140.44 C 486.0454200744629 136.44 482.0454200744629 132.44 478.0454200744629 132.44 L 477.98322067260744 132.44 C 473.98322067260744 132.44 469.98322067260744 136.44 469.98322067260744 140.44 Z "
                              fill="var(--bs-info)"
                              fillOpacity={1}
                              stroke="var(--bs-paper-bg)"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={6}
                              strokeDasharray={0}
                              className="apexcharts-bar-area "
                              index={1}
                              clipPath="url(#gridRectBarMask43v3uido)"
                              pathto="M 469.98322067260744 140.44 L 469.98322067260744 183.159 C 469.98322067260744 187.159 473.98322067260744 191.159 477.98322067260744 191.159 L 478.0454200744629 191.159 C 482.0454200744629 191.159 486.0454200744629 187.159 486.0454200744629 183.159 L 486.0454200744629 140.44 C 486.0454200744629 136.44 482.0454200744629 132.44 478.0454200744629 132.44 L 477.98322067260744 132.44 C 473.98322067260744 132.44 469.98322067260744 136.44 469.98322067260744 140.44 Z "
                              pathfrom="M 469.98322067260744 132.44 L 469.98322067260744 132.44 L 486.0454200744629 132.44 L 486.0454200744629 132.44 L 486.0454200744629 132.44 L 486.0454200744629 132.44 L 486.0454200744629 132.44 L 469.98322067260744 132.44 Z"
                              cy="194.158"
                              cx="537.523885345459"
                              j={6}
                              val={-15}
                              barheight="-64.719"
                              barwidth="22.06219940185547"
                            />
                            <g className="apexcharts-bar-goals-markers">
                              <g
    
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
           
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                            
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                     
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                    
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
                   
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                              <g
            
                                className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                clipPath="url(#gridRectMarkerMask43v3uido)"
                              />
                            </g>
                          </g>
                          <g className="apexcharts-datalabels" data:realindex={0} />
                          <g className="apexcharts-datalabels" data:realindex={1} />
                        </g>
                        <line
                          x1={0}
                          y1={0}
                          x2="514.7846527099609"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          x1={0}
                          y1={0}
                          x2="514.7846527099609"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                        <g className="apexcharts-xaxis" transform="translate(0, 0)">
                          <g
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              x="36.77033233642578"
                              y="243.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={400}
                              fill="var(--bs-secondary-color)"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              <tspan>Jan</tspan>
                              <title>Jan</title>
                            </text>
                            <text
                              x="110.31099700927734"
                              y="243.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={400}
                              fill="var(--bs-secondary-color)"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              <tspan>Feb</tspan>
                              <title>Feb</title>
                            </text>
                            <text
                              x="183.8516616821289"
                              y="243.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={400}
                              fill="var(--bs-secondary-color)"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              <tspan>Mar</tspan>
                              <title>Mar</title>
                            </text>
                            <text
                              x="257.39232635498047"
                              y="243.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={400}
                              fill="var(--bs-secondary-color)"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              <tspan>Apr</tspan>
                              <title>Apr</title>
                            </text>
                            <text
                              x="330.93299102783203"
                              y="243.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={400}
                              fill="var(--bs-secondary-color)"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              <tspan>May</tspan>
                              <title>May</title>
                            </text>
                            <text
                              x="404.4736557006836"
                              y="243.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={400}
                              fill="var(--bs-secondary-color)"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              <tspan>Jun</tspan>
                              <title>Jun</title>
                            </text>
                            <text
                              x="478.01432037353516"
                              y="243.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={400}
                              fill="var(--bs-secondary-color)"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              <tspan>Jul</tspan>
                              <title>Jul</title>
                            </text>
                          </g>
                        </g>
                        <g className="apexcharts-yaxis-annotations" />
                        <g className="apexcharts-xaxis-annotations" />
                        <g className="apexcharts-point-annotations" />
                      </g>
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-light">
                      <div
                        className="apexcharts-tooltip-title"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      />
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "var(--bs-primary)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-1"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "var(--bs-info)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-body px-xl-9 py-12 d-flex align-items-center flex-column">
                  <div className="text-center mb-6">
                    <div className="btn-group">
                      <button type="button" className="btn btn-label-primary">
                        2024
                      </button>
                      <button
                        type="button"
                        className="btn btn-label-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" >
                            2021
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" >
                            2020
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" >
                            2019
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="growthChart" style={{ minHeight: 150 }}>
                    <div
                      id="apexcharts5or7p0gw"
                      className="apexcharts-canvas apexcharts5or7p0gw apexcharts-theme-"
                      style={{ width: 300, height: 150 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        width={300}
                        height={150}
                      >
                        <foreignObject x={0} y={0} width={300} height={150}>
                          <div
                            className="apexcharts-legend"
                            xmlns="http://www.w3.org/1999/xhtml"
                          />
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                            }}
                          />
                        </foreignObject>
                        <g
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(45, -25)"
                        >
                          <defs>
                            <clipPath id="gridRectMask5or7p0gw">
                              <rect
                                width={210}
                                height={255}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectBarMask5or7p0gw">
                              <rect
                                width={216}
                                height={261}
                                x={-3}
                                y={-3}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectMarkerMask5or7p0gw">
                              <rect
                                width={210}
                                height={255}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMask5or7p0gw" />
                            <clipPath id="nonForecastMask5or7p0gw" />
                            <linearGradient x1={1} y1={0} x2={0} y2={1}>
                              <stop
                                stopOpacity={1}
                                stopColor="var(--bs-primary)"
                                offset="0.3"
                              />
                              <stop
                                stopOpacity="0.6"
                                stopColor="var(--bs-paper-bg)"
                                offset="0.7"
                              />
                              <stop
                                stopOpacity="0.6"
                                stopColor="var(--bs-paper-bg)"
                                offset={1}
                              />
                            </linearGradient>
                            <linearGradient
                              x1={1}
                              y1={0}
                              x2={0}
                              y2={1}
                              id="SvgjsLinearGradient1015"
                            >
                              <stop
                                stopOpacity={1}
                                stopColor="var(--bs-primary)"
                                offset="0.3"
                              />
                              <stop
                                stopOpacity="0.6"
                                stopColor="var(--bs-primary)"
                                offset="0.7"
                              />
                              <stop
                                stopOpacity="0.6"
                                stopColor="var(--bs-primary)"
                                offset={1}
                              />
                            </linearGradient>
                          </defs>
                          <g className="apexcharts-radialbar">
                            <g>
                              <g className="apexcharts-tracks">
                                <g
                                  className="apexcharts-radialbar-track apexcharts-track"
                                  rel={1}
                                >
                                  <path
                                    d="M 71.80457317073167 162.4961658472277 A 66.3908536585366 66.3908536585366 0 1 1 138.1954268292683 162.49616584722773 "
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="var(--bs-paper-bg)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="16.69878048780488"
                                    strokeDasharray={0}
                                    className="apexcharts-radialbar-area"
                                    id="apexcharts-radialbarTrack-0"
                                    data:pathorig="M 71.80457317073167 162.4961658472277 A 66.3908536585366 66.3908536585366 0 1 1 138.1954268292683 162.49616584722773 "
                                  />
                                </g>
                              </g>
                              <g>
                                <g
                                  className="apexcharts-series apexcharts-radial-series"
                                  seriesname="Growth"
                                  rel={1}
                                  data:realindex={0}
                                >
                                  <path
                                    d="M 71.80457317073167 162.4961658472277 A 66.3908536585366 66.3908536585366 0 1 1 171.02715761560546 98.0602660920455 "
                                    fill="none"
                                    fillOpacity="0.85"
                                    stroke="url(#SvgjsLinearGradient1015)"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth="16.69878048780488"
                                    strokeDasharray={5}
                                    className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                    data:angle={234}
                                    data:value={78}
                                    index={0}
                                    j={0}
                                    data:pathorig="M 71.80457317073167 162.4961658472277 A 66.3908536585366 66.3908536585366 0 1 1 171.02715761560546 98.0602660920455 "
                                  />
                                </g>
                                <circle
                                  r="53.04146341463416"
                                  cx={105}
                                  cy={105}
                                  className="apexcharts-radialbar-hollow"
                                  fill="transparent"
                                />
                                <g
                                  className="apexcharts-datalabels-group"
                                  transform="translate(0, 0) scale(1)"
                                  style={{ opacity: 1 }}
                                >
                                  <text
                                    x={105}
                                    y={120}
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="15px"
                                    fontFamily="var(--bs-font-family-base)"
                                    fontWeight={500}
                                    fill="var(--bs-body-color)"
                                    className="apexcharts-text apexcharts-datalabel-label"
                                    style={{
                                      fontFamily: "var(--bs-font-family-base)"
                                    }}
                                  >
                                    Growth
                                  </text>
                                  <text
                                    x={105}
                                    y={96}
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="22px"
                                    fontFamily="var(--bs-font-family-base)"
                                    fontWeight={500}
                                    fill="var(--bs-heading-color)"
                                    className="apexcharts-text apexcharts-datalabel-value"
                                    style={{
                                      fontFamily: "var(--bs-font-family-base)"
                                    }}
                                  >
                                    78%
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                          <line
                            x1={0}
                            y1={0}
                            x2={210}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            x1={0}
                            y1={0}
                            x2={210}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                        </g>
                        <g
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center fw-medium my-6">
                    62% Company Growth
                  </div>
                  <div className="d-flex gap-11 justify-content-between">
                    <div className="d-flex">
                      <div className="avatar me-2">
                        <span className="avatar-initial rounded-2 bg-label-primary">
                          <i className="icon-base bx bx-dollar icon-lg text-primary" />
                        </span>
                      </div>
                      <div className="d-flex flex-column">
                        <small>2024</small>
                        <h6 className="mb-0">$32.5k</h6>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="avatar me-2">
                        <span className="avatar-initial rounded-2 bg-label-info">
                          <i className="icon-base bx bx-wallet icon-lg text-info" />
                        </span>
                      </div>
                      <div className="d-flex flex-column">
                        <small>2023</small>
                        <h6 className="mb-0">$41.2k</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Total Revenue */}
        <div className="col-12 col-md-8 col-lg-12 col-xxl-4 order-3 order-md-2">
          <div className="row">
            <div className="col-6 mb-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between mb-4">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/paypal.png"
                        alt="paypal"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base bx bx-dots-vertical-rounded text-body-secondary" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt4"
                      >
                        <a className="dropdown-item" >
                          View More
                        </a>
                        <a className="dropdown-item" >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="mb-1">Payments</p>
                  <h4 className="card-title mb-3">$2,456</h4>
                  <small className="text-danger fw-medium">
                    <i className="icon-base bx bx-down-arrow-alt" /> -14.82%
                  </small>
                </div>
              </div>
            </div>
            <div className="col-6 mb-6">
              <div className="card h-100">
                <div className="card-body pb-0">
                  <span className="d-block fw-medium mb-1">Revenue</span>
                  <h4 className="card-title mb-0 mb-lg-4">425k</h4>
                  <div id="revenueChart" style={{ minHeight: 110 }}>
                    <div
                      id="apexchartszb0nldiik"
                      className="apexcharts-canvas apexchartszb0nldiik apexcharts-theme-"
                      style={{ width: 162, height: 95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        width={162}
                        height={95}
                      >
                        <foreignObject x={0} y={0} width={162} height={95}>
                          <div
                            className="apexcharts-legend"
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{ maxHeight: "47.5px" }}
                          />
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                            }}
                          />
                        </foreignObject>
                        <g
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                        <g
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                        <g
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(-8, 0)"
                        >
                          <g className="apexcharts-yaxis-texts-g" />
                        </g>
                        <g
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(0, 10)"
                        >
                          <defs>
                            <linearGradient
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={1}
                              id="SvgjsLinearGradient1016"
                            >
                              <stop
                                stopOpacity="0.4"
                                stopColor="rgba(216,227,240,0.4)"
                                offset={0}
                              />
                              <stop
                                stopOpacity="0.5"
                                stopColor="rgba(190,209,230,0.5)"
                                offset={1}
                              />
                              <stop
                                stopOpacity="0.5"
                                stopColor="rgba(190,209,230,0.5)"
                                offset={1}
                              />
                            </linearGradient>
                            <clipPath id="gridRectMaskzb0nldiik">
                              <rect
                                width="156.5"
                                height="57.73"
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectBarMaskzb0nldiik">
                              <rect
                                width="160.5"
                                height="61.73"
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectMarkerMaskzb0nldiik">
                              <rect
                                width="156.5"
                                height="57.73"
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMaskzb0nldiik" />
                            <clipPath id="nonForecastMaskzb0nldiik" />
                          </defs>
                          <rect
                            width="16.767857142857142"
                            height="57.73"
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            fill="url(#SvgjsLinearGradient1016)"
                            className="apexcharts-xcrosshairs"
                            y2="57.73"
                            filter="none"
                            fillOpacity="0.9"
                          />
                          <g className="apexcharts-grid">
                            <g
                              className="apexcharts-gridlines-horizontal"
                              style={{ display: "none" }}
                            >
                              <line
                                x1={0}
                                y1={0}
                                x2="156.5"
                                y2={0}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                x1={0}
                                y1="28.865"
                                x2="156.5"
                                y2="28.865"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                x1={0}
                                y1="57.73"
                                x2="156.5"
                                y2="57.73"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              className="apexcharts-gridlines-vertical"
                              style={{ display: "none" }}
                            />
                            <line
                              x1={0}
                              y1="57.73"
                              x2="156.5"
                              y2="57.73"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                            <line
                              x1={0}
                              y1={1}
                              x2={0}
                              y2="57.73"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                          </g>
                          <g
                            className="apexcharts-grid-borders"
                            style={{ display: "none" }}
                          />
                          <g className="apexcharts-bar-series apexcharts-plot-series">
                            <g
                              className="apexcharts-series"
                              rel={1}
                              seriesname="series-1"
                              data:realindex={0}
                            >
                              <path
                                d="M 2.7946428571428577 53.730999999999995 L 2.7946428571428577 38.638999999999996 C 2.7946428571428577 36.638999999999996 4.794642857142858 34.638999999999996 6.794642857142858 34.638999999999996 L 15.5625 34.638999999999996 C 17.5625 34.638999999999996 19.5625 36.638999999999996 19.5625 38.638999999999996 L 19.5625 53.730999999999995 C 19.5625 55.730999999999995 17.5625 57.730999999999995 15.5625 57.730999999999995 L 6.794642857142858 57.730999999999995 C 4.794642857142858 57.730999999999995 2.7946428571428577 55.730999999999995 2.7946428571428577 53.730999999999995 Z "
                                fill="var(--bs-primary-bg-subtle)"
                                fillOpacity={1}
                                stroke="var(--bs-primary-bg-subtle)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-bar-area undefined"
                                index={0}
                                clipPath="url(#gridRectBarMaskzb0nldiik)"
                                pathto="M 2.7946428571428577 53.730999999999995 L 2.7946428571428577 38.638999999999996 C 2.7946428571428577 36.638999999999996 4.794642857142858 34.638999999999996 6.794642857142858 34.638999999999996 L 15.5625 34.638999999999996 C 17.5625 34.638999999999996 19.5625 36.638999999999996 19.5625 38.638999999999996 L 19.5625 53.730999999999995 C 19.5625 55.730999999999995 17.5625 57.730999999999995 15.5625 57.730999999999995 L 6.794642857142858 57.730999999999995 C 4.794642857142858 57.730999999999995 2.7946428571428577 55.730999999999995 2.7946428571428577 53.730999999999995 Z "
                                pathfrom="M 2.7946428571428577 57.730999999999995 L 2.7946428571428577 57.730999999999995 L 19.5625 57.730999999999995 L 19.5625 57.730999999999995 L 19.5625 57.730999999999995 L 19.5625 57.730999999999995 L 19.5625 57.730999999999995 L 2.7946428571428577 57.730999999999995 Z"
                                cy="34.638"
                                cx="25.151785714285715"
                                j={0}
                                val={40}
                                barheight="23.092"
                                barwidth="16.767857142857142"
                              />
                              <path
                                d="M 25.151785714285715 53.730999999999995 L 25.151785714285715 6.887500000000005 C 25.151785714285715 4.887500000000005 27.151785714285715 2.887500000000005 29.151785714285715 2.887500000000005 L 37.91964285714286 2.887500000000005 C 39.91964285714286 2.887500000000005 41.91964285714286 4.887500000000005 41.91964285714286 6.887500000000005 L 41.91964285714286 53.730999999999995 C 41.91964285714286 55.730999999999995 39.91964285714286 57.730999999999995 37.91964285714286 57.730999999999995 L 29.151785714285715 57.730999999999995 C 27.151785714285715 57.730999999999995 25.151785714285715 55.730999999999995 25.151785714285715 53.730999999999995 Z "
                                fill="var(--bs-primary-bg-subtle)"
                                fillOpacity={1}
                                stroke="var(--bs-primary-bg-subtle)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-bar-area undefined"
                                index={0}
                                clipPath="url(#gridRectBarMaskzb0nldiik)"
                                pathto="M 25.151785714285715 53.730999999999995 L 25.151785714285715 6.887500000000005 C 25.151785714285715 4.887500000000005 27.151785714285715 2.887500000000005 29.151785714285715 2.887500000000005 L 37.91964285714286 2.887500000000005 C 39.91964285714286 2.887500000000005 41.91964285714286 4.887500000000005 41.91964285714286 6.887500000000005 L 41.91964285714286 53.730999999999995 C 41.91964285714286 55.730999999999995 39.91964285714286 57.730999999999995 37.91964285714286 57.730999999999995 L 29.151785714285715 57.730999999999995 C 27.151785714285715 57.730999999999995 25.151785714285715 55.730999999999995 25.151785714285715 53.730999999999995 Z "
                                pathfrom="M 25.151785714285715 57.730999999999995 L 25.151785714285715 57.730999999999995 L 41.91964285714286 57.730999999999995 L 41.91964285714286 57.730999999999995 L 41.91964285714286 57.730999999999995 L 41.91964285714286 57.730999999999995 L 41.91964285714286 57.730999999999995 L 25.151785714285715 57.730999999999995 Z"
                                cy="2.886500000000005"
                                cx="47.50892857142857"
                                j={1}
                                val={95}
                                barheight="54.84349999999999"
                                barwidth="16.767857142857142"
                              />
                              <path
                                d="M 47.50892857142857 53.730999999999995 L 47.50892857142857 27.093 C 47.50892857142857 25.093 49.50892857142857 23.093 51.50892857142857 23.093 L 60.27678571428571 23.093 C 62.27678571428571 23.093 64.27678571428571 25.093 64.27678571428571 27.093 L 64.27678571428571 53.730999999999995 C 64.27678571428571 55.730999999999995 62.27678571428571 57.730999999999995 60.27678571428571 57.730999999999995 L 51.50892857142857 57.730999999999995 C 49.50892857142857 57.730999999999995 47.50892857142857 55.730999999999995 47.50892857142857 53.730999999999995 Z "
                                fill="var(--bs-primary-bg-subtle)"
                                fillOpacity={1}
                                stroke="var(--bs-primary-bg-subtle)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-bar-area undefined"
                                index={0}
                                clipPath="url(#gridRectBarMaskzb0nldiik)"
                                pathto="M 47.50892857142857 53.730999999999995 L 47.50892857142857 27.093 C 47.50892857142857 25.093 49.50892857142857 23.093 51.50892857142857 23.093 L 60.27678571428571 23.093 C 62.27678571428571 23.093 64.27678571428571 25.093 64.27678571428571 27.093 L 64.27678571428571 53.730999999999995 C 64.27678571428571 55.730999999999995 62.27678571428571 57.730999999999995 60.27678571428571 57.730999999999995 L 51.50892857142857 57.730999999999995 C 49.50892857142857 57.730999999999995 47.50892857142857 55.730999999999995 47.50892857142857 53.730999999999995 Z "
                                pathfrom="M 47.50892857142857 57.730999999999995 L 47.50892857142857 57.730999999999995 L 64.27678571428571 57.730999999999995 L 64.27678571428571 57.730999999999995 L 64.27678571428571 57.730999999999995 L 64.27678571428571 57.730999999999995 L 64.27678571428571 57.730999999999995 L 47.50892857142857 57.730999999999995 Z"
                                cy="23.092"
                                cx="69.86607142857143"
                                j={2}
                                val={60}
                                barheight="34.638"
                                barwidth="16.767857142857142"
                              />
                              <path
                                d="M 69.86607142857143 53.730999999999995 L 69.86607142857143 35.7525 C 69.86607142857143 33.7525 71.86607142857143 31.7525 73.86607142857143 31.7525 L 82.63392857142857 31.7525 C 84.63392857142857 31.7525 86.63392857142857 33.7525 86.63392857142857 35.7525 L 86.63392857142857 53.730999999999995 C 86.63392857142857 55.730999999999995 84.63392857142857 57.730999999999995 82.63392857142857 57.730999999999995 L 73.86607142857143 57.730999999999995 C 71.86607142857143 57.730999999999995 69.86607142857143 55.730999999999995 69.86607142857143 53.730999999999995 Z "
                                fill="var(--bs-primary-bg-subtle)"
                                fillOpacity={1}
                                stroke="var(--bs-primary-bg-subtle)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-bar-area undefined"
                                index={0}
                                clipPath="url(#gridRectBarMaskzb0nldiik)"
                                pathto="M 69.86607142857143 53.730999999999995 L 69.86607142857143 35.7525 C 69.86607142857143 33.7525 71.86607142857143 31.7525 73.86607142857143 31.7525 L 82.63392857142857 31.7525 C 84.63392857142857 31.7525 86.63392857142857 33.7525 86.63392857142857 35.7525 L 86.63392857142857 53.730999999999995 C 86.63392857142857 55.730999999999995 84.63392857142857 57.730999999999995 82.63392857142857 57.730999999999995 L 73.86607142857143 57.730999999999995 C 71.86607142857143 57.730999999999995 69.86607142857143 55.730999999999995 69.86607142857143 53.730999999999995 Z "
                                pathfrom="M 69.86607142857143 57.730999999999995 L 69.86607142857143 57.730999999999995 L 86.63392857142857 57.730999999999995 L 86.63392857142857 57.730999999999995 L 86.63392857142857 57.730999999999995 L 86.63392857142857 57.730999999999995 L 86.63392857142857 57.730999999999995 L 69.86607142857143 57.730999999999995 Z"
                                cy="31.7515"
                                cx="92.22321428571429"
                                j={3}
                                val={45}
                                barheight="25.978499999999997"
                                barwidth="16.767857142857142"
                              />
                              <path
                                d="M 92.22321428571429 53.730999999999995 L 92.22321428571429 9.774000000000003 C 92.22321428571429 7.774000000000003 94.22321428571429 5.774000000000004 96.22321428571429 5.774000000000004 L 104.99107142857143 5.774000000000004 C 106.99107142857143 5.774000000000004 108.99107142857143 7.774000000000003 108.99107142857143 9.774000000000003 L 108.99107142857143 53.730999999999995 C 108.99107142857143 55.730999999999995 106.99107142857143 57.730999999999995 104.99107142857143 57.730999999999995 L 96.22321428571429 57.730999999999995 C 94.22321428571429 57.730999999999995 92.22321428571429 55.730999999999995 92.22321428571429 53.730999999999995 Z "
                                fill="var(--bs-primary)"
                                fillOpacity={1}
                                stroke="var(--bs-primary)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-bar-area undefined"
                                index={0}
                                clipPath="url(#gridRectBarMaskzb0nldiik)"
                                pathto="M 92.22321428571429 53.730999999999995 L 92.22321428571429 9.774000000000003 C 92.22321428571429 7.774000000000003 94.22321428571429 5.774000000000004 96.22321428571429 5.774000000000004 L 104.99107142857143 5.774000000000004 C 106.99107142857143 5.774000000000004 108.99107142857143 7.774000000000003 108.99107142857143 9.774000000000003 L 108.99107142857143 53.730999999999995 C 108.99107142857143 55.730999999999995 106.99107142857143 57.730999999999995 104.99107142857143 57.730999999999995 L 96.22321428571429 57.730999999999995 C 94.22321428571429 57.730999999999995 92.22321428571429 55.730999999999995 92.22321428571429 53.730999999999995 Z "
                                pathfrom="M 92.22321428571429 57.730999999999995 L 92.22321428571429 57.730999999999995 L 108.99107142857143 57.730999999999995 L 108.99107142857143 57.730999999999995 L 108.99107142857143 57.730999999999995 L 108.99107142857143 57.730999999999995 L 108.99107142857143 57.730999999999995 L 92.22321428571429 57.730999999999995 Z"
                                cy="5.773000000000003"
                                cx="114.58035714285715"
                                j={4}
                                val={90}
                                barheight="51.956999999999994"
                                barwidth="16.767857142857142"
                              />
                              <path
                                d="M 114.58035714285715 53.730999999999995 L 114.58035714285715 32.866 C 114.58035714285715 30.866 116.58035714285715 28.866 118.58035714285715 28.866 L 127.3482142857143 28.866 C 129.3482142857143 28.866 131.3482142857143 30.866 131.3482142857143 32.866 L 131.3482142857143 53.730999999999995 C 131.3482142857143 55.730999999999995 129.3482142857143 57.730999999999995 127.3482142857143 57.730999999999995 L 118.58035714285715 57.730999999999995 C 116.58035714285715 57.730999999999995 114.58035714285715 55.730999999999995 114.58035714285715 53.730999999999995 Z "
                                fill="var(--bs-primary-bg-subtle)"
                                fillOpacity={1}
                                stroke="var(--bs-primary-bg-subtle)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-bar-area undefined"
                                index={0}
                                clipPath="url(#gridRectBarMaskzb0nldiik)"
                                pathto="M 114.58035714285715 53.730999999999995 L 114.58035714285715 32.866 C 114.58035714285715 30.866 116.58035714285715 28.866 118.58035714285715 28.866 L 127.3482142857143 28.866 C 129.3482142857143 28.866 131.3482142857143 30.866 131.3482142857143 32.866 L 131.3482142857143 53.730999999999995 C 131.3482142857143 55.730999999999995 129.3482142857143 57.730999999999995 127.3482142857143 57.730999999999995 L 118.58035714285715 57.730999999999995 C 116.58035714285715 57.730999999999995 114.58035714285715 55.730999999999995 114.58035714285715 53.730999999999995 Z "
                                pathfrom="M 114.58035714285715 57.730999999999995 L 114.58035714285715 57.730999999999995 L 131.3482142857143 57.730999999999995 L 131.3482142857143 57.730999999999995 L 131.3482142857143 57.730999999999995 L 131.3482142857143 57.730999999999995 L 131.3482142857143 57.730999999999995 L 114.58035714285715 57.730999999999995 Z"
                                cy="28.865"
                                cx="136.9375"
                                j={5}
                                val={50}
                                barheight="28.865"
                                barwidth="16.767857142857142"
                              />
                              <path
                                d="M 136.9375 53.730999999999995 L 136.9375 18.433499999999995 C 136.9375 16.433499999999995 138.9375 14.433499999999997 140.9375 14.433499999999997 L 149.70535714285714 14.433499999999997 C 151.70535714285714 14.433499999999997 153.70535714285714 16.433499999999995 153.70535714285714 18.433499999999995 L 153.70535714285714 53.730999999999995 C 153.70535714285714 55.730999999999995 151.70535714285714 57.730999999999995 149.70535714285714 57.730999999999995 L 140.9375 57.730999999999995 C 138.9375 57.730999999999995 136.9375 55.730999999999995 136.9375 53.730999999999995 Z "
                                fill="var(--bs-primary-bg-subtle)"
                                fillOpacity={1}
                                stroke="var(--bs-primary-bg-subtle)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-bar-area undefined"
                                index={0}
                                clipPath="url(#gridRectBarMaskzb0nldiik)"
                                pathto="M 136.9375 53.730999999999995 L 136.9375 18.433499999999995 C 136.9375 16.433499999999995 138.9375 14.433499999999997 140.9375 14.433499999999997 L 149.70535714285714 14.433499999999997 C 151.70535714285714 14.433499999999997 153.70535714285714 16.433499999999995 153.70535714285714 18.433499999999995 L 153.70535714285714 53.730999999999995 C 153.70535714285714 55.730999999999995 151.70535714285714 57.730999999999995 149.70535714285714 57.730999999999995 L 140.9375 57.730999999999995 C 138.9375 57.730999999999995 136.9375 55.730999999999995 136.9375 53.730999999999995 Z "
                                pathfrom="M 136.9375 57.730999999999995 L 136.9375 57.730999999999995 L 153.70535714285714 57.730999999999995 L 153.70535714285714 57.730999999999995 L 153.70535714285714 57.730999999999995 L 153.70535714285714 57.730999999999995 L 153.70535714285714 57.730999999999995 L 136.9375 57.730999999999995 Z"
                                cy="14.432499999999997"
                                cx="159.29464285714286"
                                j={6}
                                val={75}
                                barheight="43.2975"
                                barwidth="16.767857142857142"
                              />
                              <g className="apexcharts-bar-goals-markers">
                                <g
                        
                                  className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                  clipPath="url(#gridRectMarkerMaskzb0nldiik)"
                                />
                                <g
                              
                                  className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                  clipPath="url(#gridRectMarkerMaskzb0nldiik)"
                                />
                                <g
                   
                                  className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                  clipPath="url(#gridRectMarkerMaskzb0nldiik)"
                                />
                                <g
               
                                  className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                  clipPath="url(#gridRectMarkerMaskzb0nldiik)"
                                />
                                <g
          
                                  className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                  clipPath="url(#gridRectMarkerMaskzb0nldiik)"
                                />
                                <g
                   
                                  className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                  clipPath="url(#gridRectMarkerMaskzb0nldiik)"
                                />
                                <g
            
                                  className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                  clipPath="url(#gridRectMarkerMaskzb0nldiik)"
                                />
                              </g>
                              <g className="apexcharts-bar-shadows apexcharts-hidden-element-shown" />
                            </g>
                            <g
                              className="apexcharts-datalabels apexcharts-hidden-element-shown"
                              data:realindex={0}
                            />
                          </g>
                          <line
                            x1={0}
                            y1={0}
                            x2="156.5"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            x1={0}
                            y1={0}
                            x2="156.5"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                x="11.178571428571429"
                                y="85.72999999999999"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>M</tspan>
                                <title>M</title>
                              </text>
                              <text
                                x="33.535714285714285"
                                y="85.72999999999999"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>T</tspan>
                                <title>T</title>
                              </text>
                              <text
                                x="55.89285714285714"
                                y="85.72999999999999"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>W</tspan>
                                <title>W</title>
                              </text>
                              <text
                                x="78.25"
                                y="85.72999999999999"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>T</tspan>
                                <title>T</title>
                              </text>
                              <text
                                x="100.60714285714286"
                                y="85.72999999999999"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>F</tspan>
                                <title>F</title>
                              </text>
                              <text
                                x="122.96428571428571"
                                y="85.72999999999999"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>S</tspan>
                                <title>S</title>
                              </text>
                              <text
                                x="145.32142857142858"
                                y="85.72999999999999"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>S</tspan>
                                <title>S</title>
                              </text>
                            </g>
                          </g>
                          <g className="apexcharts-yaxis-annotations" />
                          <g className="apexcharts-xaxis-annotations" />
                          <g className="apexcharts-point-annotations" />
                        </g>
                      </svg>
                      <div className="apexcharts-tooltip apexcharts-theme-light">
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                          style={{ order: 1 }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{
                              backgroundColor: "var(--bs-primary-bg-subtle)"
                            }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label" />
                              <span className="apexcharts-tooltip-text-y-value" />
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-sm-row flex-column gap-10 flex-wrap">
                    <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                      <div className="card-title mb-6">
                        <h5 className="text-nowrap mb-1">Profile Report</h5>
                        <span className="badge bg-label-warning">YEAR 2022</span>
                      </div>
                      <div className="mt-sm-auto">
                        <span className="text-success text-nowrap fw-medium">
                          <i className="icon-base bx bx-up-arrow-alt" /> 68.2%
                        </span>
                        <h4 className="mb-0">$84,686k</h4>
                      </div>
                    </div>
                    <div id="profileReportChart" style={{ minHeight: 75 }}>
                      <div
                        id="apexchartshtuv897b"
                        className="apexcharts-canvas apexchartshtuv897b apexcharts-theme-"
                        style={{ width: 240, height: 75 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="apexcharts-svg"
                          xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          width={240}
                          height={75}
                        >
                          <foreignObject x={0} y={0} width={240} height={75}>
                            <div
                              className="apexcharts-legend"
                              xmlns="http://www.w3.org/1999/xhtml"
                              style={{ maxHeight: "37.5px" }}
                            />
                            <style
                              type="text/css"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                              }}
                            />
                          </foreignObject>
                          <rect
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                          />
                          <g
                            className="apexcharts-datalabels-group"
                            transform="translate(0, 0) scale(1)"
                          />
                          <g
                            className="apexcharts-datalabels-group"
                            transform="translate(0, 0) scale(1)"
                          />
                          <g
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(-18, 0)"
                          />
                          <g
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(0, 2.5)"
                          >
                            <defs>
                              <clipPath id="gridRectMaskhtuv897b">
                                <rect
                                  width={232}
                                  height={70}
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="gridRectBarMaskhtuv897b">
                                <rect
                                  width={241}
                                  height={79}
                                  x="-4.5"
                                  y="-4.5"
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="gridRectMarkerMaskhtuv897b">
                                <rect
                                  width={232}
                                  height={70}
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMaskhtuv897b" />
                              <clipPath id="nonForecastMaskhtuv897b" />
                              <filter
                                id="SvgjsFilter1024"
                                filterUnits="userSpaceOnUse"
                                width="200%"
                                height="200%"
                                x="-50%"
                                y="-50%"
                              >
                                <feOffset
                                  id="SvgjsFeOffset1017"
                                  result="offset"
                                  in="SourceGraphic"
                                  dx={5}
                                  dy={10}
                                />
                                <feGaussianBlur
                                  id="SvgjsFeGaussianBlur1018"
                                  result="blur"
                                  in="offset"
                                  stdDeviation={3}
                                />
                                <feFlood
                                  id="SvgjsFeFlood1019"
                                  result="flood"
                                  in="SourceGraphic"
                                  floodColor="var(--bs-warning)"
                                  floodOpacity="0.15"
                                />
                                <feComposite
                                  id="SvgjsFeComposite1020"
                                  result="shadow"
                                  in="flood"
                                  in2="blur"
                                  operator="in"
                                />
                                <feMerge
                                  id="SvgjsFeMerge1021"
                                  result="SvgjsFeMerge1021"
                                  in="SourceGraphic"
                                >
                                  <feMergeNode
                                    id="SvgjsFeMergeNode1022"
                                    result="SvgjsFeMergeNode1022"
                                    in="shadow"
                                  />
                                  <feMergeNode
                                    id="SvgjsFeMergeNode1023"
                                    result="SvgjsFeMergeNode1023"
                                    in="SourceGraphic"
                                  />
                                </feMerge>
                              </filter>
                            </defs>
                            <line
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={70}
                              stroke="#b6b6b6"
                              strokeDasharray={3}
                              strokeLinecap="butt"
                              className="apexcharts-xcrosshairs"
                              x={0}
                              y={0}
                              width={1}
                              height={70}
                              fill="#b1b9c4"
                              filter="none"
                              fillOpacity="0.9"
                              strokeWidth={1}
                            />
                            <g className="apexcharts-grid">
                              <g
                                className="apexcharts-gridlines-horizontal"
                                style={{ display: "none" }}
                              >
                                <line
                                  x1={0}
                                  y1={0}
                                  x2={232}
                                  y2={0}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  x1={0}
                                  y1={35}
                                  x2={232}
                                  y2={35}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  x1={0}
                                  y1={70}
                                  x2={232}
                                  y2={70}
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                className="apexcharts-gridlines-vertical"
                                style={{ display: "none" }}
                              />
                              <line
                                x1={0}
                                y1={70}
                                x2={232}
                                y2={70}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                x1={0}
                                y1={1}
                                x2={0}
                                y2={70}
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              className="apexcharts-grid-borders"
                              style={{ display: "none" }}
                            />
                            <g className="apexcharts-line-series apexcharts-plot-series">
                              <g
                                className="apexcharts-series"
                                zindex={0}
                                seriesname="series-1"
                                data:longestseries="true"
                                rel={1}
                                data:realindex={0}
                              >
                                <path
                                  d="M 0 66.5C 16.24 66.5 30.16 10.5 46.4 10.5C 62.64 10.5 76.56 54.25 92.8 54.25C 109.03999999999999 54.25 122.96 19.25 139.2 19.25C 155.44 19.25 169.35999999999999 33.25 185.6 33.25C 201.83999999999997 33.25 215.76 5.25 231.99999999999997 5.25"
                                  fill="none"
                                  fillOpacity={1}
                                  stroke="var(--bs-warning)"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={5}
                                  strokeDasharray={0}
                                  className="apexcharts-line"
                                  index={0}
                                  clipPath="url(#gridRectMaskhtuv897b)"
                                  filter="url(#SvgjsFilter1024)"
                                  pathto="M 0 66.5C 16.24 66.5 30.16 10.5 46.4 10.5C 62.64 10.5 76.56 54.25 92.8 54.25C 109.03999999999999 54.25 122.96 19.25 139.2 19.25C 155.44 19.25 169.35999999999999 33.25 185.6 33.25C 201.83999999999997 33.25 215.76 5.25 231.99999999999997 5.25"
                                  pathfrom="M 0 70 L 0 70 L 46.4 70 L 92.8 70 L 139.2 70 L 185.6 70 L 231.99999999999997 70"
                                  fillRule="evenodd"
                                />
                                <g
                                  className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                  data:realindex={0}
                                >
                                  <g className="apexcharts-series-markers">
                                    <path
                                      d="M 0, 0 
        m -0, 0 
        a 0,0 0 1,0 0,0 
        a 0,0 0 1,0 -0,0"
                                      fill="var(--bs-warning)"
                                      fillOpacity={1}
                                      stroke="#ffffff"
                                      strokeOpacity="0.9"
                                      strokeLinecap="butt"
                                      strokeWidth={2}
                                      strokeDasharray={0}
                                      cx={0}
                                      cy={0}
                                      shape="circle"
                                      className="apexcharts-marker wvyia6epw no-pointer-events"
                                      default-marker-size={0}
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                className="apexcharts-datalabels"
                                data:realindex={0}
                              />
                            </g>
                            <line
                              x1={0}
                              y1={0}
                              x2={232}
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              x1={0}
                              y1={0}
                              x2={232}
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              />
                            </g>
                            <g className="apexcharts-yaxis-annotations" />
                            <g className="apexcharts-xaxis-annotations" />
                            <g className="apexcharts-point-annotations" />
                          </g>
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                            style={{ order: 1 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "var(--bs-warning)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Order Statistics */}
        <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1 me-2">Order Statistics</h5>
                <p className="card-subtitle">42.82k Total Sales</p>
              </div>
              <div className="dropdown">
                <button
                  className="btn text-body-secondary p-0"
                  type="button"
                  id="orederStatistics"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="icon-base bx bx-dots-vertical-rounded icon-lg" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="orederStatistics"
                >
                  <a className="dropdown-item" >
                    Select All
                  </a>
                  <a className="dropdown-item" >
                    Refresh
                  </a>
                  <a className="dropdown-item" >
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-6">
                <div className="d-flex flex-column align-items-center gap-1">
                  <h3 className="mb-1">8,258</h3>
                  <small>Total Orders</small>
                </div>
                <div id="orderStatisticsChart" style={{ minHeight: 118 }}>
                  <div
                    id="apexchartsmi309du1"
                    className="apexcharts-canvas apexchartsmi309du1 apexcharts-theme-"
                    style={{ width: 136, height: 118 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(15, 0)"
                      width={136}
                      height={118}
                    >
                      <foreignObject x={0} y={0} width={136} height={118}>
                        <div
                          className="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                        />
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                          }}
                        />
                      </foreignObject>
                      <g
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(0, 0)"
                      >
                        <defs>
                          <clipPath id="gridRectMaskmi309du1">
                            <rect
                              width={121}
                              height={165}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectBarMaskmi309du1">
                            <rect
                              width={130}
                              height={174}
                              x="-4.5"
                              y="-4.5"
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="gridRectMarkerMaskmi309du1">
                            <rect
                              width={121}
                              height={165}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskmi309du1" />
                          <clipPath id="nonForecastMaskmi309du1" />
                        </defs>
                        <g className="apexcharts-pie">
                          <g transform="translate(0, 0) scale(1)">
                            <circle
                              r="37.518292682926834"
                              cx="60.5"
                              cy="60.5"
                              fill="transparent"
                            />
                            <g className="apexcharts-slices">
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Electronic"
                                rel={1}
                                data:realindex={0}
                              >
                                <path
                                  d="M 60.5 10.475609756097555 A 50.024390243902445 50.024390243902445 0 0 1 110.52439024390245 60.5 L 98.01829268292684 60.5 A 37.518292682926834 37.518292682926834 0 0 0 60.5 22.981707317073166 L 60.5 10.475609756097555 z "
                                  fill="var(--bs-success)"
                                  fillOpacity={1}
                                  stroke="var(--bs-paper-bg)"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={5}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-0"
                                  index={0}
                                  j={0}
                                  data:angle={90}
                                  data:startangle={0}
                                  data:strokewidth={5}
                                  data:value={50}
                                  data:pathorig="M 60.5 10.475609756097555 A 50.024390243902445 50.024390243902445 0 0 1 110.52439024390245 60.5 L 98.01829268292684 60.5 A 37.518292682926834 37.518292682926834 0 0 0 60.5 22.981707317073166 L 60.5 10.475609756097555 z "
                                />
                              </g>
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Sports"
                                rel={2}
                                data:realindex={1}
                              >
                                <path
                                  d="M 110.52439024390245 60.5 A 50.024390243902445 50.024390243902445 0 0 1 15.92794192413799 83.21059792599539 L 27.07095644310349 77.53294844449654 A 37.518292682926834 37.518292682926834 0 0 0 98.01829268292684 60.5 L 110.52439024390245 60.5 z "
                                  fill="var(--bs-primary)"
                                  fillOpacity={1}
                                  stroke="var(--bs-paper-bg)"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={5}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-1"
                                  index={0}
                                  j={1}
                                  data:angle={153}
                                  data:startangle={90}
                                  data:strokewidth={5}
                                  data:value={85}
                                  data:pathorig="M 110.52439024390245 60.5 A 50.024390243902445 50.024390243902445 0 0 1 15.92794192413799 83.21059792599539 L 27.07095644310349 77.53294844449654 A 37.518292682926834 37.518292682926834 0 0 0 98.01829268292684 60.5 L 110.52439024390245 60.5 z "
                                />
                              </g>
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Decor"
                                rel={3}
                                data:realindex={2}
                              >
                                <path
                                  d="M 15.92794192413799 83.21059792599539 A 50.024390243902445 50.024390243902445 0 0 1 12.923977684844871 45.04161328138981 L 24.817983263633657 48.90620996104236 A 37.518292682926834 37.518292682926834 0 0 0 27.07095644310349 77.53294844449654 L 15.92794192413799 83.21059792599539 z "
                                  fill="var(--bs-secondary)"
                                  fillOpacity={1}
                                  stroke="var(--bs-paper-bg)"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={5}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-2"
                                  index={0}
                                  j={2}
                                  data:angle={45}
                                  data:startangle={243}
                                  data:strokewidth={5}
                                  data:value={25}
                                  data:pathorig="M 15.92794192413799 83.21059792599539 A 50.024390243902445 50.024390243902445 0 0 1 12.923977684844871 45.04161328138981 L 24.817983263633657 48.90620996104236 A 37.518292682926834 37.518292682926834 0 0 0 27.07095644310349 77.53294844449654 L 15.92794192413799 83.21059792599539 z "
                                />
                              </g>
                              <g
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Fashion"
                                rel={4}
                                data:realindex={3}
                              >
                                <path
                                  d="M 12.923977684844871 45.04161328138981 A 50.024390243902445 50.024390243902445 0 0 1 60.491269096883734 10.475610518012587 L 60.4934518226628 22.98170788850944 A 37.518292682926834 37.518292682926834 0 0 0 24.817983263633657 48.90620996104236 L 12.923977684844871 45.04161328138981 z "
                                  fill="var(--bs-info)"
                                  fillOpacity={1}
                                  stroke="var(--bs-paper-bg)"
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={5}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-3"
                                  index={0}
                                  j={3}
                                  data:angle={72}
                                  data:startangle={288}
                                  data:strokewidth={5}
                                  data:value={40}
                                  data:pathorig="M 12.923977684844871 45.04161328138981 A 50.024390243902445 50.024390243902445 0 0 1 60.491269096883734 10.475610518012587 L 60.4934518226628 22.98170788850944 A 37.518292682926834 37.518292682926834 0 0 0 24.817983263633657 48.90620996104236 L 12.923977684844871 45.04161328138981 z "
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            className="apexcharts-datalabels-group"
                            transform="translate(0, 0) scale(1)"
                          >
                            <text
                              x="60.5"
                              y="77.5"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="13px"
                              fontFamily="Helvetica, Arial, sans-serif"
                              fontWeight={400}
                              fill="var(--bs-body-color)"
                              className="apexcharts-text apexcharts-datalabel-label"
                              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                            >
                              Weekly
                            </text>
                            <text
                              x="60.5"
                              y="59.5"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="1.125rem"
                              fontFamily="var(--bs-font-family-base)"
                              fontWeight={500}
                              fill="var(--bs-heading-color)"
                              className="apexcharts-text apexcharts-datalabel-value"
                              style={{ fontFamily: "var(--bs-font-family-base)" }}
                            >
                              38%
                            </text>
                          </g>
                        </g>
                        <line
                          x1={0}
                          y1={0}
                          x2={121}
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          x1={0}
                          y1={0}
                          x2={121}
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                      </g>
                      <g
                        className="apexcharts-datalabels-group"
                        transform="translate(0, 0) scale(1)"
                      />
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "var(--bs-success)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-1"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "var(--bs-primary)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-2"
                        style={{ order: 3 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "var(--bs-secondary)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-3"
                        style={{ order: 4 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "var(--bs-info)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="p-0 m-0">
                <li className="d-flex align-items-center mb-5">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-primary">
                      <i className="icon-base bx bx-mobile-alt" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0">Electronic</h6>
                      <small>Mobile, Earbuds, TV</small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">82.5k</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-5">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-success">
                      <i className="icon-base bx bx-closet" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0">Fashion</h6>
                      <small>T-shirt, Jeans, Shoes</small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">23.8k</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-5">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-info">
                      <i className="icon-base bx bx-home-alt" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0">Decor</h6>
                      <small>Fine Art, Dining</small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">849k</h6>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-secondary">
                      <i className="icon-base bx bx-football" />
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0">Sports</h6>
                      <small>Football, Cricket Kit</small>
                    </div>
                    <div className="user-progress">
                      <h6 className="mb-0">99</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*/ Order Statistics */}
        {/* Expense Overview */}
        <div className="col-md-6 col-lg-4 order-1 mb-6">
          <div className="card h-100">
            <div className="card-header nav-align-top">
              <ul className="nav nav-pills flex-wrap row-gap-2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-tabs-line-card-income"
                    aria-controls="navs-tabs-line-card-income"
                    aria-selected="true"
                  >
                    Income
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Expenses
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Profit
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content p-0">
                <div
                  className="tab-pane fade show active"
                  id="navs-tabs-line-card-income"
                  role="tabpanel"
                >
                  <div className="d-flex mb-6">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/wallet-primary.png"
                        alt="User"
                      />
                    </div>
                    <div>
                      <p className="mb-0">Total Balance</p>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-1">$459.10</h6>
                        <small className="text-success fw-medium">
                          <i className="icon-base bx bx-chevron-up icon-lg" />
                          42.9%
                        </small>
                      </div>
                    </div>
                  </div>
                  <div id="incomeChart" style={{ minHeight: 200 }}>
                    <div
                      id="apexchartsg4me0zre"
                      className="apexcharts-canvas apexchartsg4me0zre apexcharts-theme-"
                      style={{ width: 397, height: 200 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg apexcharts-zoomable"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        width={397}
                        height={200}
                      >
                        <foreignObject x={0} y={0} width={397} height={200}>
                          <div
                            className="apexcharts-legend"
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{ maxHeight: 100 }}
                          />
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                            }}
                          />
                        </foreignObject>
                        <rect
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                        />
                        <g
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                        <g
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                        <g
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(-8, 0)"
                        >
                          <g className="apexcharts-yaxis-texts-g" />
                        </g>
                        <g
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(10, 10)"
                        >
                          <defs>
                            <clipPath id="gridRectMaskg4me0zre">
                              <rect
                                width="369.635009765625"
                                height="158.73"
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectBarMaskg4me0zre">
                              <rect
                                width="376.635009765625"
                                height="165.73"
                                x="-3.5"
                                y="-3.5"
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectMarkerMaskg4me0zre">
                              <rect
                                width="383.635009765625"
                                height="172.73"
                                x={-7}
                                y={-7}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMaskg4me0zre" />
                            <clipPath id="nonForecastMaskg4me0zre" />
                            <linearGradient
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={1}
                              id="SvgjsLinearGradient1025"
                            >
                              <stop
                                stopOpacity="0.3"
                                stopColor="var(--bs-primary)"
                                offset={0}
                              />
                              <stop
                                stopOpacity="0.3"
                                stopColor="var(--bs-paper-bg)"
                                offset={1}
                              />
                              <stop
                                stopOpacity="0.3"
                                stopColor="var(--bs-paper-bg)"
                                offset={1}
                              />
                            </linearGradient>
                          </defs>
                          <line
                            x1={0}
                            y1={0}
                            x2={0}
                            y2="158.73"
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            strokeLinecap="butt"
                            className="apexcharts-xcrosshairs"
                            x={0}
                            y={0}
                            width={1}
                            height="158.73"
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <g className="apexcharts-grid">
                            <g className="apexcharts-gridlines-horizontal">
                              <line
                                x1={0}
                                y1="39.6825"
                                x2="369.635009765625"
                                y2="39.6825"
                                stroke="var(--bs-border-color)"
                                strokeDasharray={8}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                x1={0}
                                y1="79.365"
                                x2="369.635009765625"
                                y2="79.365"
                                stroke="var(--bs-border-color)"
                                strokeDasharray={8}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                x1={0}
                                y1="119.04749999999999"
                                x2="369.635009765625"
                                y2="119.04749999999999"
                                stroke="var(--bs-border-color)"
                                strokeDasharray={8}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g className="apexcharts-gridlines-vertical" />
                            <line
                              x1={0}
                              y1="158.73"
                              x2="369.635009765625"
                              y2="158.73"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                            <line
                              x1={0}
                              y1={1}
                              x2={0}
                              y2="158.73"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                          </g>
                          <g className="apexcharts-grid-borders">
                            <line
                              x1={0}
                              y1={0}
                              x2="369.635009765625"
                              y2={0}
                              stroke="var(--bs-border-color)"
                              strokeDasharray={8}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              x1={0}
                              y1="158.73"
                              x2="369.635009765625"
                              y2="158.73"
                              stroke="var(--bs-border-color)"
                              strokeDasharray={8}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g className="apexcharts-area-series apexcharts-plot-series">
                            <g
                              className="apexcharts-series"
                              zindex={0}
                              seriesname="series-1"
                              data:longestseries="true"
                              rel={1}
                              data:realindex={0}
                            >
                              <path
                                d="M 0 115.07924999999999C 21.562042236328125 115.07924999999999 40.043792724609375 79.365 61.6058349609375 79.365C 83.16787719726562 79.365 101.64962768554688 111.11099999999999 123.211669921875 111.11099999999999C 144.77371215820312 111.11099999999999 163.25546264648438 31.74599999999998 184.8175048828125 31.74599999999998C 206.37954711914062 31.74599999999998 224.86129760742188 95.238 246.42333984375 95.238C 267.9853820800781 95.238 286.4671325683594 59.52375000000001 308.0291748046875 59.52375000000001C 329.5912170410156 59.52375000000001 348.0729675292969 83.33324999999999 369.635009765625 83.33324999999999C 369.635009765625 83.33324999999999 369.635009765625 83.33324999999999 369.635009765625 158.73 L 0 158.73z"
                                fill="url(#SvgjsLinearGradient1025)"
                                fillOpacity={1}
                                stroke="none"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMaskg4me0zre)"
                                pathto="M 0 115.07924999999999C 21.562042236328125 115.07924999999999 40.043792724609375 79.365 61.6058349609375 79.365C 83.16787719726562 79.365 101.64962768554688 111.11099999999999 123.211669921875 111.11099999999999C 144.77371215820312 111.11099999999999 163.25546264648438 31.74599999999998 184.8175048828125 31.74599999999998C 206.37954711914062 31.74599999999998 224.86129760742188 95.238 246.42333984375 95.238C 267.9853820800781 95.238 286.4671325683594 59.52375000000001 308.0291748046875 59.52375000000001C 329.5912170410156 59.52375000000001 348.0729675292969 83.33324999999999 369.635009765625 83.33324999999999C 369.635009765625 83.33324999999999 369.635009765625 83.33324999999999 369.635009765625 158.73 L 0 158.73z"
                                pathfrom="M 0 158.73 L 0 158.73 L 61.6058349609375 158.73 L 123.211669921875 158.73 L 184.8175048828125 158.73 L 246.42333984375 158.73 L 308.0291748046875 158.73 L 369.635009765625 158.73z"
                              />
                              <path
                                d="M 0 115.07924999999999C 21.562042236328125 115.07924999999999 40.043792724609375 79.365 61.6058349609375 79.365C 83.16787719726562 79.365 101.64962768554688 111.11099999999999 123.211669921875 111.11099999999999C 144.77371215820312 111.11099999999999 163.25546264648438 31.74599999999998 184.8175048828125 31.74599999999998C 206.37954711914062 31.74599999999998 224.86129760742188 95.238 246.42333984375 95.238C 267.9853820800781 95.238 286.4671325683594 59.52375000000001 308.0291748046875 59.52375000000001C 329.5912170410156 59.52375000000001 348.0729675292969 83.33324999999999 369.635009765625 83.33324999999999"
                                fill="none"
                                fillOpacity={1}
                                stroke="var(--bs-primary)"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMaskg4me0zre)"
                                pathto="M 0 115.07924999999999C 21.562042236328125 115.07924999999999 40.043792724609375 79.365 61.6058349609375 79.365C 83.16787719726562 79.365 101.64962768554688 111.11099999999999 123.211669921875 111.11099999999999C 144.77371215820312 111.11099999999999 163.25546264648438 31.74599999999998 184.8175048828125 31.74599999999998C 206.37954711914062 31.74599999999998 224.86129760742188 95.238 246.42333984375 95.238C 267.9853820800781 95.238 286.4671325683594 59.52375000000001 308.0291748046875 59.52375000000001C 329.5912170410156 59.52375000000001 348.0729675292969 83.33324999999999 369.635009765625 83.33324999999999"
                                pathfrom="M 0 158.73 L 0 158.73 L 61.6058349609375 158.73 L 123.211669921875 158.73 L 184.8175048828125 158.73 L 246.42333984375 158.73 L 308.0291748046875 158.73 L 369.635009765625 158.73"
                                fillRule="evenodd"
                              />
                              <g
                                className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                data:realindex={0}
                              >
                                <g
                                  className=""
                                  clipPath="url(#gridRectMarkerMaskg4me0zre)"
                                >
                                  <path
                                    d="M -1, 115.07924999999999 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                    fill="transparent"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    cx={-1}
                                    cy="115.07924999999999"
                                    shape="circle"
                                    className="apexcharts-marker no-pointer-events wrij4u7d9l"
                                    rel={0}
                                    j={0}
                                    index={0}
                                    default-marker-size={6}
                                  />
                                  <path
                                    d="M 60.6058349609375, 79.365 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                    fill="transparent"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    cx="60.6058349609375"
                                    cy="79.365"
                                    shape="circle"
                                    className="apexcharts-marker no-pointer-events w27b92r54j"
                                    rel={1}
                                    j={1}
                                    index={0}
                                    default-marker-size={6}
                                  />
                                </g>
                                <g
                                  className=""
                                  clipPath="url(#gridRectMarkerMaskg4me0zre)"
                                >
                                  <path
                                    d="M 122.211669921875, 111.11099999999999 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                    fill="transparent"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    cx="122.211669921875"
                                    cy="111.11099999999999"
                                    shape="circle"
                                    className="apexcharts-marker no-pointer-events wkos8ijqn"
                                    rel={2}
                                    j={2}
                                    index={0}
                                    default-marker-size={6}
                                  />
                                </g>
                                <g
                                  className=""
                                  clipPath="url(#gridRectMarkerMaskg4me0zre)"
                                >
                                  <path
                                    d="M 183.8175048828125, 31.74599999999998 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                    fill="transparent"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    cx="183.8175048828125"
                                    cy="31.74599999999998"
                                    shape="circle"
                                    className="apexcharts-marker no-pointer-events w1pc5z72o"
                                    rel={3}
                                    j={3}
                                    index={0}
                                    default-marker-size={6}
                                  />
                                </g>
                                <g
                                  className=""
                                  clipPath="url(#gridRectMarkerMaskg4me0zre)"
                                >
                                  <path
                                    d="M 245.42333984375, 95.238 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                    fill="transparent"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    cx="245.42333984375"
                                    cy="95.238"
                                    shape="circle"
                                    className="apexcharts-marker no-pointer-events wyvnyef8c"
                                    rel={4}
                                    j={4}
                                    index={0}
                                    default-marker-size={6}
                                  />
                                </g>
                                <g
                                  className=""
                                  clipPath="url(#gridRectMarkerMaskg4me0zre)"
                                >
                                  <path
                                    d="M 307.0291748046875, 59.52375000000001 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                    fill="transparent"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    cx="307.0291748046875"
                                    cy="59.52375000000001"
                                    shape="circle"
                                    className="apexcharts-marker no-pointer-events wlg2kxreu"
                                    rel={5}
                                    j={5}
                                    index={0}
                                    default-marker-size={6}
                                  />
                                </g>
                                <g
                                  className=""
                                  clipPath="url(#gridRectMarkerMaskg4me0zre)"
                                >
                                  <path
                                    d="M 368.635009765625, 83.33324999999999 
        m -6, 0 
        a 6,6 0 1,0 12,0 
        a 6,6 0 1,0 -12,0"
                                    fill="var(--bs-white)"
                                    fillOpacity={1}
                                    stroke="var(--bs-primary)"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    cx="368.635009765625"
                                    cy="83.33324999999999"
                                    shape="circle"
                                    className="apexcharts-marker no-pointer-events wae5z98on"
                                    rel={6}
                                    j={6}
                                    index={0}
                                    default-marker-size={6}
                                  />
                                </g>
                              </g>
                            </g>
                            <g
                              className="apexcharts-datalabels"
                              data:realindex={0}
                            />
                          </g>
                          <line
                            x1={0}
                            y1={0}
                            x2="369.635009765625"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            x1={0}
                            y1={0}
                            x2="369.635009765625"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                x={0}
                                y="186.73"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>Jan</tspan>
                                <title>Jan</title>
                              </text>
                              <text
                                x="61.6058349609375"
                                y="186.73"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>Feb</tspan>
                                <title>Feb</title>
                              </text>
                              <text
                                x="123.211669921875"
                                y="186.73"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>Mar</tspan>
                                <title>Mar</title>
                              </text>
                              <text
                                x="184.8175048828125"
                                y="186.73"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>Apr</tspan>
                                <title>Apr</title>
                              </text>
                              <text
                                x="246.42333984375"
                                y="186.73"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>May</tspan>
                                <title>May</title>
                              </text>
                              <text
                                x="308.0291748046875"
                                y="186.73"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>Jun</tspan>
                                <title>Jun</title>
                              </text>
                              <text
                                x="369.635009765625"
                                y="186.73"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="13px"
                                fontFamily="Helvetica, Arial, sans-serif"
                                fontWeight={400}
                                fill="var(--bs-secondary-color)"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif"
                                }}
                              >
                                <tspan>Jul</tspan>
                                <title>Jul</title>
                              </text>
                            </g>
                          </g>
                          <g className="apexcharts-yaxis-annotations" />
                          <g className="apexcharts-xaxis-annotations" />
                          <g className="apexcharts-point-annotations" />
                        </g>
                        <rect
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-zoom-rect"
                        />
                        <rect
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-selection-rect"
                        />
                      </svg>
                      <div className="apexcharts-tooltip apexcharts-theme-light">
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                          style={{ order: 1 }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "var(--bs-primary)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label" />
                              <span className="apexcharts-tooltip-text-y-value" />
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                        <div
                          className="apexcharts-xaxistooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-6 gap-3">
                    <div className="flex-shrink-0">
                      <div id="expensesOfWeek" style={{ minHeight: 58 }}>
                        <div
                          id="apexchartsi91fx8ry"
                          className="apexcharts-canvas apexchartsi91fx8ry apexcharts-theme-"
                          style={{ width: 60, height: 58 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg"
                            xmlns:data="ApexChartsNS"
                            transform="translate(0, 0)"
                            width={60}
                            height={58}
                          >
                            <foreignObject x={0} y={0} width={60} height={58}>
                              <div
                                className="apexcharts-legend"
                                xmlns="http://www.w3.org/1999/xhtml"
                              />
                              <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    "
                                }}
                              />
                            </foreignObject>
                            <g
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(-10, -10)"
                            >
                              <defs>
                                <clipPath id="gridRectMaski91fx8ry">
                                  <rect
                                    width={80}
                                    height={85}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectBarMaski91fx8ry">
                                  <rect
                                    width={86}
                                    height={91}
                                    x={-3}
                                    y={-3}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectMarkerMaski91fx8ry">
                                  <rect
                                    width={80}
                                    height={85}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMaski91fx8ry" />
                                <clipPath id="nonForecastMaski91fx8ry" />
                              </defs>
                              <g className="apexcharts-radialbar">
                                <g>
                                  <g className="apexcharts-tracks">
                                    <g
                                      className="apexcharts-radialbar-track apexcharts-track"
                                      rel={1}
                                    >
                                      <path
                                        d="M 40 19.336585365853654 A 20.663414634146346 20.663414634146346 0 1 1 39.9963935538176 19.336585680575453 "
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="var(--bs-border-color)"
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth="4.760097560975613"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area"
                                        id="apexcharts-radialbarTrack-0"
                                        data:pathorig="M 40 19.336585365853654 A 20.663414634146346 20.663414634146346 0 1 1 39.9963935538176 19.336585680575453 "
                                      />
                                    </g>
                                  </g>
                                  <g>
                                    <g
                                      className="apexcharts-series apexcharts-radial-series"
                                      seriesname="series-1"
                                      rel={1}
                                      data:realindex={0}
                                    >
                                      <path
                                        d="M 40 19.336585365853654 A 20.663414634146346 20.663414634146346 0 1 1 23.28294639915962 52.1456503839557 "
                                        fill="none"
                                        fillOpacity="0.85"
                                        stroke="var(--bs-primary)"
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth="4.907317073170734"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                        data:angle={234}
                                        data:value={65}
                                        index={0}
                                        j={0}
                                        data:pathorig="M 40 19.336585365853654 A 20.663414634146346 20.663414634146346 0 1 1 23.28294639915962 52.1456503839557 "
                                      />
                                    </g>
                                    <circle
                                      r="16.283365853658538"
                                      cx={40}
                                      cy={40}
                                      className="apexcharts-radialbar-hollow"
                                      fill="transparent"
                                    />
                                    <g
                                      className="apexcharts-datalabels-group"
                                      transform="translate(0, 0) scale(1)"
                                      style={{ opacity: 1 }}
                                    >
                                      <text
                                        x={40}
                                        y={45}
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontFamily="var(--bs-font-family-base)"
                                        fontWeight={400}
                                        fill="var(--bs-body-color)"
                                        className="apexcharts-text apexcharts-datalabel-value"
                                        style={{
                                          fontFamily: "var(--bs-font-family-base)"
                                        }}
                                      >
                                        $65
                                      </text>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <line
                                x1={0}
                                y1={0}
                                x2={80}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                x1={0}
                                y1={0}
                                x2={80}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                            </g>
                            <g
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Income this week</h6>
                      <small>$39k less than last week</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Expense Overview */}
        {/* Transactions */}
        <div className="col-md-6 col-lg-4 order-2 mb-6">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title m-0 me-2">Transactions</h5>
              <div className="dropdown">
                <button
                  className="btn text-body-secondary p-0"
                  type="button"
                  id="transactionID"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="icon-base bx bx-dots-vertical-rounded icon-lg" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="transactionID"
                >
                  <a className="dropdown-item" >
                    Last 28 Days
                  </a>
                  <a className="dropdown-item" >
                    Last Month
                  </a>
                  <a className="dropdown-item" >
                    Last Year
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body pt-4">
              <ul className="p-0 m-0">
                <li className="d-flex align-items-center mb-6">
                  <div className="avatar flex-shrink-0 me-3">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/paypal.png"
                      alt="User"
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <small className="d-block">Paypal</small>
                      <h6 className="fw-normal mb-0">Send money</h6>
                    </div>
                    <div className="user-progress d-flex align-items-center gap-2">
                      <h6 className="fw-normal mb-0">+82.6</h6>
                      <span className="text-body-secondary">USD</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-6">
                  <div className="avatar flex-shrink-0 me-3">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/wallet.png"
                      alt="User"
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <small className="d-block">Wallet</small>
                      <h6 className="fw-normal mb-0">Mac'D</h6>
                    </div>
                    <div className="user-progress d-flex align-items-center gap-2">
                      <h6 className="fw-normal mb-0">+270.69</h6>
                      <span className="text-body-secondary">USD</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-6">
                  <div className="avatar flex-shrink-0 me-3">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/chart.png"
                      alt="User"
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <small className="d-block">Transfer</small>
                      <h6 className="fw-normal mb-0">Refund</h6>
                    </div>
                    <div className="user-progress d-flex align-items-center gap-2">
                      <h6 className="fw-normal mb-0">+637.91</h6>
                      <span className="text-body-secondary">USD</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-6">
                  <div className="avatar flex-shrink-0 me-3">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/cc-primary.png"
                      alt="User"
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <small className="d-block">Credit Card</small>
                      <h6 className="fw-normal mb-0">Ordered Food</h6>
                    </div>
                    <div className="user-progress d-flex align-items-center gap-2">
                      <h6 className="fw-normal mb-0">-838.71</h6>
                      <span className="text-body-secondary">USD</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-6">
                  <div className="avatar flex-shrink-0 me-3">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/wallet.png"
                      alt="User"
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <small className="d-block">Wallet</small>
                      <h6 className="fw-normal mb-0">Starbucks</h6>
                    </div>
                    <div className="user-progress d-flex align-items-center gap-2">
                      <h6 className="fw-normal mb-0">+203.33</h6>
                      <span className="text-body-secondary">USD</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="avatar flex-shrink-0 me-3">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/cc-warning.png"
                      alt="User"
                      className="rounded"
                    />
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <small className="d-block">Mastercard</small>
                      <h6 className="fw-normal mb-0">Ordered Food</h6>
                    </div>
                    <div className="user-progress d-flex align-items-center gap-2">
                      <h6 className="fw-normal mb-0">-92.45</h6>
                      <span className="text-body-secondary">USD</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*/ Transactions */}
        {/* Activity Timeline */}
        <div className="col-md-12 col-lg-6 order-4 order-lg-3">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <h5 className="card-title m-0 me-2">Activity Timeline</h5>
              <div className="dropdown">
                <button
                  className="btn text-body-secondary p-0"
                  type="button"
                  id="timelineWapper"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="icon-base bx bx-dots-vertical-rounded icon-lg" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="timelineWapper"
                >
                  <a className="dropdown-item" >
                    Select All
                  </a>
                  <a className="dropdown-item" >
                    Refresh
                  </a>
                  <a className="dropdown-item" >
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body pt-2">
              <ul className="timeline mb-0">
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-primary" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-3">
                      <h6 className="mb-0">12 Invoices have been paid</h6>
                      <small className="text-body-secondary">12 min ago</small>
                    </div>
                    <p className="mb-2">Invoices have been paid to the company</p>
                    <div className="d-flex align-items-center mb-1">
                      <div className="badge bg-lighter rounded-2">
                        <img
                          src="../../assets//img/icons/misc/pdf.png"
                          alt="img"
                          width={15}
                          className="me-2"
                        />
                        <span className="h6 mb-0 text-body">invoices.pdf</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-success" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-3">
                      <h6 className="mb-0">Client Meeting</h6>
                      <small className="text-body-secondary">45 min ago</small>
                    </div>
                    <p className="mb-2">Project meeting with john @10:15am</p>
                    <div className="d-flex justify-content-between flex-wrap gap-2">
                      <div className="d-flex flex-wrap align-items-center">
                        <div className="avatar avatar-sm me-2">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/1.png"
                            alt="Avatar"
                            className="rounded-circle"
                          />
                        </div>
                        <div>
                          <p className="mb-0 small fw-medium">
                            Lester McCarthy (Client)
                          </p>
                          <small>CEO of ThemeSelection</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-info" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-3">
                      <h6 className="mb-0">Create a new project for client</h6>
                      <small className="text-body-secondary">2 Day Ago</small>
                    </div>
                    <p className="mb-2">6 team members in a project</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap p-0">
                        <div className="d-flex flex-wrap align-items-center">
                          <ul className="list-unstyled users-list d-flex align-items-center avatar-group m-0 me-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up"
                              aria-label="Vinnie Mostowy"
                              data-bs-original-title="Vinnie Mostowy"
                            >
                              <img
                                className="rounded-circle"
                                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up"
                              aria-label="Allen Rieske"
                              data-bs-original-title="Allen Rieske"
                            >
                              <img
                                className="rounded-circle"
                                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/12.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up"
                              aria-label="Julee Rossignol"
                              data-bs-original-title="Julee Rossignol"
                            >
                              <img
                                className="rounded-circle"
                                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/6.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-original-title="3 more"
                              >
                                +3
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*/ Activity Timeline */}
        {/* pill table */}
        <div className="col-md-6 order-3 order-lg-4 mb-6 mb-lg-0">
          <div className="card text-center h-100">
            <div className="card-header nav-align-top">
              <ul className="nav nav-pills flex-wrap row-gap-2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-pills-browser"
                    aria-controls="navs-pills-browser"
                    aria-selected="true"
                  >
                    Browser
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-pills-os"
                    aria-controls="navs-pills-os"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Operating System
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-pills-country"
                    aria-controls="navs-pills-country"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Country
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content pt-0 pb-4">
              <div
                className="tab-pane fade show active"
                id="navs-pills-browser"
                role="tabpanel"
              >
                <div className="table-responsive text-start text-nowrap">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Browser</th>
                        <th>Visits</th>
                        <th className="w-50">Data In Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/chrome.png"
                              alt="Chrome"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Chrome</span>
                          </div>
                        </td>
                        <td className="text-heading">8.92k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "64.75%" }}
                                aria-valuenow="64.75"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">64.75%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/safari.png"
                              alt="Safari"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Safari</span>
                          </div>
                        </td>
                        <td className="text-heading">1.29k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "18.43%" }}
                                aria-valuenow="18.43"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">18.43%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/firefox.png"
                              alt="Firefox"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Firefox</span>
                          </div>
                        </td>
                        <td className="text-heading">328</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "8.37%" }}
                                aria-valuenow="8.37"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">8.37%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/edge.png"
                              alt="Edge"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Edge</span>
                          </div>
                        </td>
                        <td className="text-heading">142</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "6.12%" }}
                                aria-valuenow="6.12"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">6.12%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/opera.png"
                              alt="Opera"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Opera</span>
                          </div>
                        </td>
                        <td className="text-heading">82</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "2.12%" }}
                                aria-valuenow="1.94"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">2.12%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/uc.png"
                              alt="uc"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">UC Browser</span>
                          </div>
                        </td>
                        <td className="text-heading">328</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "20.14%" }}
                                aria-valuenow="1.94"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">20.14%</small>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="navs-pills-os" role="tabpanel">
                <div className="table-responsive text-start text-nowrap">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>System</th>
                        <th>Visits</th>
                        <th className="w-50">Data In Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/windows.png"
                              alt="Windows"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Windows</span>
                          </div>
                        </td>
                        <td className="text-heading">875.24k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "61.50%" }}
                                aria-valuenow="61.50"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">61.50%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/mac.png"
                              alt="Mac"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Mac</span>
                          </div>
                        </td>
                        <td className="text-heading">89.68k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "16.67%" }}
                                aria-valuenow="16.67"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">16.67%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/ubuntu.png"
                              alt="Ubuntu"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Ubuntu</span>
                          </div>
                        </td>
                        <td className="text-heading">37.68k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "12.82%" }}
                                aria-valuenow="12.82"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">12.82%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/chrome.png"
                              alt="Chrome"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Chrome</span>
                          </div>
                        </td>
                        <td className="text-heading">8.34k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "6.25%" }}
                                aria-valuenow="6.25"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">6.25%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/cent.png"
                              alt="Cent"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Cent</span>
                          </div>
                        </td>
                        <td className="text-heading">2.25k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "2.76%" }}
                                aria-valuenow="2.76"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">2.76%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/brands/linux.png"
                              alt="linux"
                              height={24}
                              className="me-3"
                            />
                            <span className="text-heading">Linux</span>
                          </div>
                        </td>
                        <td className="text-heading">328k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "20.14%" }}
                                aria-valuenow="2.76"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">20.14%</small>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="navs-pills-country"
                role="tabpanel"
              >
                <div className="table-responsive text-start text-nowrap">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Country</th>
                        <th>Visits</th>
                        <th className="w-50">Data In Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="fis fi fi-us rounded-circle fs-4 me-3" />
                            <span className="text-heading">USA</span>
                          </div>
                        </td>
                        <td className="text-heading">87.24k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "38.12%" }}
                                aria-valuenow="38.12"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">38.12%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="fis fi fi-br rounded-circle fs-4 me-3" />
                            <span className="text-heading">Brazil</span>
                          </div>
                        </td>
                        <td className="text-heading">42.68k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "28.23%" }}
                                aria-valuenow="28.23"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">28.23%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="fis fi fi-in rounded-circle fs-4 me-3" />
                            <span className="text-heading">India</span>
                          </div>
                        </td>
                        <td className="text-heading">12.58k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "14.82%" }}
                                aria-valuenow="14.82"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">14.82%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="fis fi fi-au rounded-circle fs-4 me-3" />
                            <span className="text-heading">Australia</span>
                          </div>
                        </td>
                        <td className="text-heading">4.13k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "12.72%" }}
                                aria-valuenow="12.72"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">12.72%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="fis fi fi-fr rounded-circle fs-4 me-3" />
                            <span className="text-heading">France</span>
                          </div>
                        </td>
                        <td className="text-heading">2.21k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "7.11%" }}
                                aria-valuenow="7.11"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">7.11%</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <i className="fis fi fi-ca rounded-circle fs-4 me-3" />
                            <span className="text-heading">Canada</span>
                          </div>
                        </td>
                        <td className="text-heading">22.35k</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center gap-4">
                            <div className="progress w-100" style={{ height: 10 }}>
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "15.13%" }}
                                aria-valuenow="7.11"
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <small className="fw-medium">15.13%</small>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ pill table */}
      </div>
    </Layout>
  )
}

export default Home