import LeftEditorBar from "./Editor/LeftEditorBar";

export default function SecondHeader() {
  return (
    <header className="site__header d-lg-block d-none postition-sticky">
      <div className="site-header postition-sticky">
        <div className="site-header__middle container">
          <div className="header__logo">
            <a href="/">
              <div className="header-logo-href">
                <div className="header-div-logo">
                  <img
                    alt=""
                    aria-hidden="true"
                    role="presentation"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
                  />
                </div>
                <noscript>
                  <img
                    alt=""
                    srcSet="https://zega-accessories.zegashop.com/vendor/webkul/ui/assets/images/stores-logo.svg?auto=format&amp;fit=max&amp;w=256 1x, https://zega-accessories.zegashop.com/vendor/webkul/ui/assets/images/stores-logo.svg?auto=format&amp;fit=max&amp;w=384 2x"
                    src="https://zega-accessories.zegashop.com/vendor/webkul/ui/assets/images/stores-logo.svg"
                    decoding="async"
                    className="second-header-img"
                  />
                </noscript>
                <img
                  alt=""
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  className="second-two-img"
                />
              </div>
            </a>
          </div>
          <div className="site-header__search">
            <ul className="nav-links__list">
              <a href="/page/blogs">
                <li className="nav-links__item">Blog</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="site-header__nav-panel">
          <div className="nav-panel">
            <div className="nav-panel__container container">
              <div className="nav-panel__row">
                <div className="nav-panel__departments">
                  <div className="departments">
                    <div className="departments__body">
                      <div className="departments__links-wrapper">
                        <ul className="departments__links"></ul>
                      </div>
                    </div>
                    <button type="button" className="departments__button">
                      <div className="departamanets-div">
                        <div>
                          <img
                            className="departaments-img"
                            alt=""
                            aria-hidden="true"
                            role="presentation"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                          />
                        </div>
                        <noscript>
                          <img
                            alt="Menu Icon"
                            srcSet="_next/static/image/images/MenuIcon.54a2da0432218d5214df99a0c164d8ec.png?auto=format&amp;fit=max&amp;w=32 1x, _next/static/image/images/MenuIcon.54a2da0432218d5214df99a0c164d8ec.png?auto=format&amp;fit=max&amp;w=64 2x"
                            src="/_next/static/image/images/MenuIcon.54a2da0432218d5214df99a0c164d8ec.png"
                            decoding="async"
                            className="menu-btn-img"
                          />
                        </noscript>
                        <img
                          alt="Menu Icon"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          decoding="async"
                          className="menu-btn-img"
                          //   style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                        />
                      </div>
                      <span className="category-title-fms">Category</span>
                    </button>
                  </div>
                </div>
                <div className="site-header__search">
                  <div className="search search--location--header">
                    <div className="search__body">
                      <div className="search__form">
                        <input
                          type="text"
                          value=""
                          className="search__input"
                          name="search"
                          placeholder="I am looking for․․."
                          aria-label="Site search"
                          autoComplete="off"
                        />
                        <button className="search__button search__button--type--submit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26.65"
                            height="27"
                          >
                            <path d="M18.017 16.948c3.267-4.614 2.75-11.8-1.864-15.065a10.236 10.236 0 1 0-11.83 16.708c3.293 2.331 8.356 2.051 11.829 0l7.393 7.331c.815.858 1.616 1.523 2.474.708 0 0 .708-.535.624-1.168s-.96-1.363-.96-1.363zm-7.786 1.015c-3.646 0-7.715-3.854-7.716-7.711a8.3 8.3 0 0 1 7.711-7.715 8.283 8.283 0 0 1 7.715 7.7c0 3.857-4.058 7.719-7.705 7.725z"></path>
                          </svg>
                        </button>
                        <div className="search__border"></div>
                      </div>
                      <div className="suggestions suggestions--location--header search__suggestions">
                        <ul className="suggestions__list"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-panel__indicators">
                  <div>
                    <div className="indicator indicator--trigger--click undefined">
                      <button type="button" className="indicator__button">
                        <span className="indicator__area">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24.986"
                            height="22.392"
                          >
                            <path
                              d="M12.493 22.392a1.459 1.459 0 0 1-.966-.366c-1.009-.889-1.983-1.725-2.841-2.462a53 53 0 0 1-6.2-5.865A9.4 9.4 0 0 1 0 7.564a7.9 7.9 0 0 1 1.982-5.373A6.7 6.7 0 0 1 6.98 0a6.256 6.256 0 0 1 3.926 1.365 8.065 8.065 0 0 1 1.587 1.669 8.066 8.066 0 0 1 1.587-1.669A6.256 6.256 0 0 1 18.006 0a6.7 6.7 0 0 1 5 2.191 7.9 7.9 0 0 1 1.982 5.373 9.4 9.4 0 0 1-2.48 6.136 52.993 52.993 0 0 1-6.2 5.865c-.86.738-1.835 1.575-2.846 2.466a1.46 1.46 0 0 1-.966.365zM6.98 1.474a5.254 5.254 0 0 0-3.922 1.717 6.426 6.426 0 0 0-1.595 4.373A7.913 7.913 0 0 0 3.6 12.755a52.153 52.153 0 0 0 6.026 5.684c.862.74 1.839 1.579 2.856 2.474 1.023-.9 2-1.737 2.865-2.478a52.166 52.166 0 0 0 6.025-5.683 7.913 7.913 0 0 0 2.141-5.191 6.426 6.426 0 0 0-1.595-4.373 5.253 5.253 0 0 0-3.922-1.716 4.832 4.832 0 0 0-3.031 1.057A7.14 7.14 0 0 0 13.286 4.5a.92.92 0 0 1-1.587 0 7.134 7.134 0 0 0-1.689-1.969 4.832 4.832 0 0 0-3.03-1.057zm0 0"
                              fill="#fff"
                            ></path>
                          </svg>
                          <span className="indicator__value">0</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="indicator indicator--trigger--click cart-icon">
                    <span className="indicator__area">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25.5"
                        height="25.5"
                      >
                        <path
                          d="M7.95 19.95a2.4 2.4 0 1 0 2.4 2.4 2.407 2.407 0 0 0-2.4-2.4zM.75.75v2.4h2.4l4.32 9.12-1.68 2.88a4.264 4.264 0 0 0-.24 1.2 2.407 2.407 0 0 0 2.4 2.4h14.4v-2.4H8.43a.258.258 0 0 1-.24-.24v-.12l1.08-2.04h8.88a2.188 2.188 0 0 0 2.04-1.2l4.32-7.8a.661.661 0 0 0 .24-.6 1.134 1.134 0 0 0-1.2-1.2H5.79L4.71.75zm19.2 19.2a2.4 2.4 0 1 0 2.4 2.4 2.407 2.407 0 0 0-2.4-2.4z"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                      <span className="indicator__value">0</span>
                    </span>
                    <div className="indicator__dropdown">
                      <div>
                        <div className="dropcart">
                          <div className="dropcart__empty">
                            Your cart is empty!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="indicator indicator--trigger--click account-logo-svg">
                    <span className="indicator__area">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.5"
                        height="27"
                      >
                        <g>
                          <path d="M11.081 12.885A6.368 6.368 0 0 0 15.701 11a6.191 6.191 0 0 0 1.914-4.558 6.191 6.191 0 0 0-1.914-4.555 6.6 6.6 0 0 0-9.24 0 6.19 6.19 0 0 0-1.914 4.555A6.19 6.19 0 0 0 6.461 11a6.37 6.37 0 0 0 4.62 1.885zM7.585 3a4.993 4.993 0 0 1 6.992 0 4.625 4.625 0 0 1 1.449 3.447 4.625 4.625 0 0 1-1.449 3.447 4.992 4.992 0 0 1-6.992 0 4.624 4.624 0 0 1-1.449-3.447A4.625 4.625 0 0 1 7.585 3zm0 0"></path>
                          <path d="M22.445 20.82a15.789 15.789 0 0 0-.219-1.69 13.226 13.226 0 0 0-.419-1.7 8.359 8.359 0 0 0-.7-1.585 5.979 5.979 0 0 0-1.062-1.373 4.687 4.687 0 0 0-1.526-.951 5.311 5.311 0 0 0-1.948-.35 1.986 1.986 0 0 0-1.056.444c-.316.2-.687.441-1.1.7a6.328 6.328 0 0 1-1.423.622 5.569 5.569 0 0 1-3.481 0 6.308 6.308 0 0 1-1.422-.622c-.409-.259-.78-.5-1.1-.7a1.984 1.984 0 0 0-1.055-.444 5.3 5.3 0 0 0-1.947.35 4.684 4.684 0 0 0-1.526.951A5.983 5.983 0 0 0 1.4 15.846a8.377 8.377 0 0 0-.7 1.585 13.261 13.261 0 0 0-.419 1.7 15.683 15.683 0 0 0-.219 1.691 22.58 22.58 0 0 0-.054 1.58 4.423 4.423 0 0 0 1.33 3.36 4.81 4.81 0 0 0 3.427 1.24h12.978a4.811 4.811 0 0 0 3.427-1.24 4.421 4.421 0 0 0 1.33-3.361c0-.539-.019-1.071-.055-1.58zm-2.365 3.8a3.239 3.239 0 0 1-2.338.808l-12.985.001a3.239 3.239 0 0 1-2.338-.808 2.887 2.887 0 0 1-.839-2.225c0-.5.017-1 .05-1.471a14.144 14.144 0 0 1 .2-1.522 11.692 11.692 0 0 1 .369-1.5 6.819 6.819 0 0 1 .573-1.289 4.432 4.432 0 0 1 .78-1.014 3.109 3.109 0 0 1 1.015-.626 3.663 3.663 0 0 1 1.245-.238c.055.029.154.085.314.188.325.21.7.45 1.113.712a7.861 7.861 0 0 0 1.786.792 7.161 7.161 0 0 0 4.453 0 7.871 7.871 0 0 0 1.787-.792c.424-.269.788-.5 1.113-.711.16-.1.258-.159.314-.188a3.665 3.665 0 0 1 1.245.238 3.114 3.114 0 0 1 1.015.626 4.422 4.422 0 0 1 .78 1.015 6.8 6.8 0 0 1 .573 1.288 11.665 11.665 0 0 1 .369 1.5 14.263 14.263 0 0 1 .2 1.523c.034.473.05.968.051 1.471a2.887 2.887 0 0 1-.839 2.225zm0 0"></path>
                        </g>
                      </svg>
                    </span>
                    <div className="indicator__dropdown">
                      <div>
                        <div className="account-menu">
                          <form className="account-menu__form">
                            <div className="account-menu__form-title">
                              Log in
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="header-signin-email"
                                className="sr-only"
                              >
                                e-mail address
                              </label>
                              <input
                                type="email"
                                id="header-signin-email"
                                className="form-control form-control-lg f16"
                                placeholder="E-mail"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="header-signin-password"
                                className="sr-only"
                              >
                                Գաղտնաբառ*
                              </label>
                              <div className="account-menu__form-forgot">
                                <input
                                  type="password"
                                  id="header-signin-password"
                                  className="form-control form-control-lg f16"
                                  placeholder="Password"
                                />
                                <a href="/forgot/password">Forgot password?</a>
                              </div>
                            </div>
                            <div className="form-group account-menu__form-button">
                              <button
                                type="submit"
                                className="btn btn-orange btn-md login-drop-btn rounded-pills"
                              >
                                Log in
                              </button>
                            </div>
                            <div className="account-menu__form-link">
                              <span>Create account</span>
                            </div>
                          </form>
                          <div className="account-menu__divider"></div>
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
    </header>
  );
}
