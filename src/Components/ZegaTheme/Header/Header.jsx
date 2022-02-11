import React from "react";
import SecondHeader from "./SecondHeader";
export default function Header() {
  return (
    <div>
      <div className="Toastify"></div>
      <div className="mobilemenu" style={{ opacity: "0" }}>
        <div className="mobilemenu__backdrop"></div>
        <div className="mobilemenu__body">
          <div className="mobilemenu__header">
            <div className="mobilemenu__title">Menu</div>
            <button type="button" className="mobilemenu__close">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M17.71 17.71a.99.99 0 0 1-1.4 0L10 11.4l-6.31 6.31a.99.99 0 1 1-1.4-1.4L8.6 10 2.29 3.69a.99.99 0 1 1 1.4-1.4L10 8.6l6.31-6.31a.99.99 0 1 1 1.4 1.4L11.4 10l6.31 6.31a.99.99 0 0 1 0 1.4z"></path>
              </svg>
            </button>
          </div>
          <div className="mobilemenu__content">
            <ul className="mobile-links mobile-links--level--0">
              <li>
                <div className="mobile-links__item">
                  <div className="mobile-links__item-title">
                    <button
                      type="button"
                      className="mobile-links__item-link"
                    ></button>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="mobile-links mobile-links--level--0">
              <li>
                <div className="mobile-links__item">
                  <div className="mobile-links__item-title">
                    <button
                      type="button"
                      className="mobile-links__item-link"
                    ></button>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="mob-links__item">
              <a className="mob-links__blok-a" href="/page/blogs">
                <span className="mobile-links__blok">Blog</span>
              </a>
            </ul>
            <ul className="mobile-links mobile-links--level--0"></ul>
          </div>
        </div>
      </div>
      {/* <LeftEditorBar TextList={TextList} setBoard={setBoard} /> */}
      <div className="site  sidebar-show">
        <header className="site__header d-lg-none">
          <div className="mobile-header">
            <div className="mobile-header__panel">
              <div>
                <div className="site-header__topbar topbar d-lg-block d-none">
                  <div className="topbar__container container">
                    <div className="topbar__row">
                      <div className="topbar__item topbar__item--link ">
                        <span>+1 (929) 336 - 4318</span>
                      </div>
                      <div className="topbar__item currency-adjust"></div>
                      <div className="topbar__item language-adjust">
                        <div className="topbar-dropdown">
                          <button
                            className="topbar-dropdown__btn null-icon-fms"
                            type="button"
                          >
                            <span
                              style={{
                                paddingBottom: "3px",
                                paddingRight: "10px",
                              }}
                            ></span>
                            <div className="inner-class-inline">
                              <div className="inner-child">
                                <img
                                  className="inner-img-1"
                                  alt=""
                                  aria-hidden="true"
                                  role="presentation"
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                />
                              </div>
                              <noscript>
                                <img
                                  className="inner-img-2"
                                  alt="language"
                                  srcSet="../../vendor/webkul/ui/assets/images/flag_undefined.svg?auto=format&amp;fit=max&amp;w=32 1x, ../../vendor/webkul/ui/assets/images/flag_undefined.svg?auto=format&amp;fit=max&amp;w=48 2x"
                                  src="../../vendor/webkul/ui/assets/images/flag_undefined.svg"
                                  decoding="async"
                                />
                              </noscript>
                              <img
                                className="inner-img-3"
                                alt="language"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-header__body container">
                  <button type="button" className="mobile-header__menu-button">
                    <svg
                      className="mobile-header__menu-button-burger"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="21.693"
                    >
                      <g>
                        <g fill="#1e1e1e">
                          <path d="M0 0h32v2H0z"></path>
                          <path d="M0 9.846h32v2H0z"></path>
                          <path d="M0 19.693h32v2H0z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                  <div className="header__logo">
                    <a href="/">
                      <div
                        style={{
                          display: "inline-block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: "0",
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              margin: "0",
                              border: "none",
                              padding: "0",
                            }}
                            alt=""
                            aria-hidden="true"
                            role="presentation"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
                          />
                        </div>
                        <noscript>
                          <img
                            alt=""
                            srcSet="https://zega-accessories.zegashop.com/vendor/webkul/ui/assets/images/logo.svg?auto=format&amp;fit=max&amp;w=256 1x, https://zega-accessories.zegashop.com/vendor/webkul/ui/assets/images/logo.svg?auto=format&amp;fit=max&amp;w=384 2x"
                            src="https://zega-accessories.zegashop.com/vendor/webkul/ui/assets/images/logo.svg"
                            decoding="async"
                            style={{
                              position: "absolute",
                              top: "0",
                              left: "0",
                              bottom: "0",
                              right: "0",
                              boxSizing: "border-box",
                              padding: "0",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0",
                              height: "0",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </noscript>
                        <img
                          alt=""
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          decoding="async"
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            bottom: "0",
                            right: "0",
                            boxSizing: "border-box",
                            padding: "0",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0",
                            height: "0",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="search search--location--mobile-header mobile-header__search">
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
                        <button
                          className="search__button search__button--type--close"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path d="M17.71 17.71a.99.99 0 0 1-1.4 0L10 11.4l-6.31 6.31a.99.99 0 1 1-1.4-1.4L8.6 10 2.29 3.69a.99.99 0 1 1 1.4-1.4L10 8.6l6.31-6.31a.99.99 0 1 1 1.4 1.4L11.4 10l6.31 6.31a.99.99 0 0 1 0 1.4z"></path>
                          </svg>
                        </button>
                        <div className="search__border"></div>
                      </div>
                      <div className="suggestions suggestions--location--mobile-header search__suggestions">
                        <ul className="suggestions__list"></ul>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-header__indicators">
                    <div className="indicator indicator--trigger--click indicator--mobile indicator--mobile-search search-icon d-md-none">
                      <button type="button" className="indicator__button">
                        <span className="indicator__area">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26.65"
                            height="27"
                          >
                            <path d="M18.017 16.948c3.267-4.614 2.75-11.8-1.864-15.065a10.236 10.236 0 1 0-11.83 16.708c3.293 2.331 8.356 2.051 11.829 0l7.393 7.331c.815.858 1.616 1.523 2.474.708 0 0 .708-.535.624-1.168s-.96-1.363-.96-1.363zm-7.786 1.015c-3.646 0-7.715-3.854-7.716-7.711a8.3 8.3 0 0 1 7.711-7.715 8.283 8.283 0 0 1 7.715 7.7c0 3.857-4.058 7.719-7.705 7.725z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="mx-2">
                      <span className="wishlist-icon-mobile">
                        <span className="indicator__value">0</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30.128"
                          height="27"
                        >
                          <path d="M15.064 27a1.759 1.759 0 0 1-1.165-.441 345.28 345.28 0 0 0-3.426-2.968h-.005a63.9 63.9 0 0 1-7.48-7.072A11.341 11.341 0 0 1 0 9.121a9.526 9.526 0 0 1 2.39-6.479A8.074 8.074 0 0 1 8.416 0a7.543 7.543 0 0 1 4.734 1.646 9.725 9.725 0 0 1 1.914 2.013 9.726 9.726 0 0 1 1.914-2.013A7.543 7.543 0 0 1 21.712 0a8.075 8.075 0 0 1 6.026 2.642 9.525 9.525 0 0 1 2.39 6.478 11.339 11.339 0 0 1-2.988 7.394 63.9 63.9 0 0 1-7.479 7.072c-1.037.89-2.212 1.9-3.432 2.974a1.761 1.761 0 0 1-1.164.44zM8.416 1.778a6.335 6.335 0 0 0-4.729 2.069 7.749 7.749 0 0 0-1.922 5.274 9.541 9.541 0 0 0 2.582 6.26 62.886 62.886 0 0 0 7.266 6.853h.006c1.039.892 2.217 1.9 3.443 2.983a400.609 400.609 0 0 1 3.454-2.988 62.9 62.9 0 0 0 7.265-6.853 9.542 9.542 0 0 0 2.582-6.26 7.749 7.749 0 0 0-1.923-5.269 6.334 6.334 0 0 0-4.729-2.069 5.826 5.826 0 0 0-3.654 1.274 8.61 8.61 0 0 0-2.037 2.374 1.11 1.11 0 0 1-1.914 0 8.6 8.6 0 0 0-2.036-2.374 5.826 5.826 0 0 0-3.654-1.274zm0 0"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="topbar-dropdown">
                      <button
                        className="topbar-dropdown__btn null-icon-fms"
                        type="button"
                      >
                        <span className="topBar-span"></span>
                        <div className="top-bar-div">
                          <div className="topbar-div-two">
                            <img
                              alt=""
                              aria-hidden="true"
                              role="presentation"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                            />
                          </div>
                          <noscript>
                            <img
                              alt="language"
                              srcSet="../../vendor/webkul/ui/assets/images/flag_undefined.svg?auto=format&amp;fit=max&amp;w=32 1x, ../../vendor/webkul/ui/assets/images/flag_undefined.svg?auto=format&amp;fit=max&amp;w=48 2x"
                              src="../../vendor/webkul/ui/assets/images/flag_undefined.svg"
                              decoding="async"
                              className="img-2noscript"
                            />
                          </noscript>
                          <img
                            alt="language"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            className="img-3noscript"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="site-header__topbar topbar d-lg-block d-none">
          <div className="topbar__container container">
            <div className="topbar__row">
              <div className="topbar__item topbar__item--link ">
                <span>+1 (929) 336 - 4318</span>
              </div>
              <div className="topbar__item currency-adjust"></div>
              <div className="topbar__item language-adjust">
                <div className="topbar-dropdown">
                  <button
                    className="topbar-dropdown__btn null-icon-fms"
                    type="button"
                  >
                    <span className="dropdown-span"></span>
                    <div className="dropdown-div">
                      <div className="drop-div-child">
                        <img
                          className="drop-div-child-img"
                          alt=""
                          aria-hidden="true"
                          role="presentation"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </div>
                      <noscript>
                        <img
                          alt="language"
                          srcSet="../../vendor/webkul/ui/assets/images/flag_undefined.svg?auto=format&amp;fit=max&amp;w=32 1x, ../../vendor/webkul/ui/assets/images/flag_undefined.svg?auto=format&amp;fit=max&amp;w=48 2x"
                          src="../../vendor/webkul/ui/assets/images/flag_undefined.svg"
                          decoding="async"
                          className="drop-no-script-img"
                        />
                      </noscript>
                      <img
                        alt="language"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        className="img-lang"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SecondHeader />
      </div>
    </div>
  );
}
