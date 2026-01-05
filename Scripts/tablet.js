
    window._currentDevice = 'tablet';
    window.Parameters = window.Parameters || {
        HomeUrl: 'http://app.multiscreensite.com/site/a40a688b',
        AccountUUID: 'a8143079f55145cfaaa26ebcac354662',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: 'a40a688b',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Mon Nov 03 21:55:19 UTC 2025',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialPostPageUuid: '',
        InitialDynamicItem: '',
        DynamicPageInfo: {
            isDynamicPage: false,
            base64JsonRowData: 'null',
        },
        InitialPageAlias: 'home',
        InitialPageUuid: '424650312f4a44119f0420fc70c7eeba',
        InitialPageId: '40337880',
        InitialEncodedPageAlias: 'aG9tZQ==',
        InitialHeaderUuid: '2b718e0852fe4cfab94ad1fd9430fd6e',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '500000',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/a40a688b?preview=true&dm_device=tablet&dm_exportSite=true&nossl&dm_exportSite_protected=c76933bc_1764686727060_5_af9394a992e49c12f135c85fa3338c9d3c7a85e08aeb9834112663b39136b1d0',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        IsStoreSuspended: false,
        HasCustomDomain: true,
        SimpleSite: false,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'en',
        currentLocale: 'en',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: 5,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/a40a688b',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: true,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        isInEditor: false,
        hasNativeStore: false,
        defaultLang: 'en',
        hamburgerMigration: null,
        isFlexSite: true
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 30;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if (!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function () {
            },
            getCurrentDeviceType: function () {
                return window._currentDevice;
            },
            runOnReady: (ns, fn) => {
                const safeFn = dmAPI.toSafeFn(fn);
                ns = ns || 'global_' + Math.random().toString(36).slice(2, 11);
                const eventName = 'afterAjax.' + ns;

                if (document.readyState === 'complete') {
                    $.DM.events.off(eventName).on(eventName, safeFn);
                    setTimeout(function () {
                        safeFn({
                            isAjax: false,
                        });
                    }, 0);
                } else {
                    window?.waitForDeferred?.('dmAjax', () => {
                        $.DM.events.off(eventName).on(eventName, safeFn);
                        safeFn({
                            isAjax: false,
                        });
                    });
                }
            },
            toSafeFn: (fn) => {
                if (fn?.safe) {
                    return fn;
                }
                const safeFn = function (...args) {
                    try {
                        return fn?.apply(null, args);
                    } catch (e) {
                        console.log('function failed ' + e.message);
                    }
                };
                safeFn.safe = true;
                return safeFn;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }


/**
 * There are a few <link> tags with CSS resource in them that are preloaded in the page
 * in each of those there is a "onload" handler which invokes the loadCSS callback
 * defined here.
 * We are monitoring 3 main CSS files - the runtime, the global and the page.
 * When each load we check to see if we can append them all in a batch. If threre
 * is no page css (which may happen on inner pages) then we do not wait for it
 */
(function () {
  let cssLinks = {};
  function loadCssLink(link) {
    link.onload = null;
    link.rel = "stylesheet";
    link.type = "text/css";
  }
  
    function checkCss() {
      const pageCssLink = document.querySelector("[id*='CssLink']");
      const widgetCssLink = document.querySelector("[id*='widgetCSS']");

        if (cssLinks && cssLinks.runtime && cssLinks.global && (!pageCssLink || cssLinks.page) && (!widgetCssLink || cssLinks.widget)) {
            const storedRuntimeCssLink = cssLinks.runtime;
            const storedPageCssLink = cssLinks.page;
            const storedGlobalCssLink = cssLinks.global;
            const storedWidgetCssLink = cssLinks.widget;

            storedGlobalCssLink.disabled = true;
            loadCssLink(storedGlobalCssLink);

            if (storedPageCssLink) {
                storedPageCssLink.disabled = true;
                loadCssLink(storedPageCssLink);
            }

            if(storedWidgetCssLink) {
                storedWidgetCssLink.disabled = true;
                loadCssLink(storedWidgetCssLink);
            }

            storedRuntimeCssLink.disabled = true;
            loadCssLink(storedRuntimeCssLink);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    storedRuntimeCssLink.disabled = false;
                    storedGlobalCssLink.disabled = false;
                    if (storedPageCssLink) {
                      storedPageCssLink.disabled = false;
                    }
                    if (storedWidgetCssLink) {
                      storedWidgetCssLink.disabled = false;
                    }
                    // (SUP-4179) Clear the accumulated cssLinks only when we're
                    // sure that the document has finished loading and the document 
                    // has been parsed.
                    if(document.readyState === 'interactive') {
                      cssLinks = null;
                    }
                }, 0);
            });
        }
    }
  

  function loadCSS(link) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var noCSS = !!urlParams.get("nocss");
      var cssTimeout = urlParams.get("cssTimeout") || 0;

      if (noCSS) {
        return;
      }
      if (link.href && link.href.includes("d-css-runtime")) {
        cssLinks.runtime = link;
        checkCss();
      } else if (link.id === "siteGlobalCss") {
        cssLinks.global = link;
        checkCss();
      } 
      
      else if (link.id && link.id.includes("CssLink")) {
        cssLinks.page = link;
        checkCss();
      } else if (link.id && link.id.includes("widgetCSS")) {
        cssLinks.widget = link;
        checkCss();
      }
      
      else {
        requestIdleCallback(function () {
          window.setTimeout(function () {
            loadCssLink(link);
          }, parseInt(cssTimeout, 10));
        });
      }
    } catch (e) {
      throw e
    }
  }
  window.loadCSS = window.loadCSS || loadCSS;
})();


    /* usage: window.getDeferred(<deferred name>).resolve() or window.getDeferred(<deferred name>).promise.then(...)*/
    function Def() {
        this.promise = new Promise((function (a, b) {
            this.resolve = a, this.reject = b
        }).bind(this))
    }

    const defs = {};
    window.getDeferred = function (a) {
        return null == defs[a] && (defs[a] = new Def), defs[a]
    }
    window.waitForDeferred = function (b, a, c) {
        let d = window?.getDeferred?.(b);
        d
            ? d.promise.then(a)
            : c && ["complete", "interactive"].includes(document.readyState)
                ? setTimeout(a, 1)
                : c
                    ? document.addEventListener("DOMContentLoaded", a)
                    : console.error(`Deferred  does not exist`);
    };








{
  "@context": "https://schema.org",
  "@type": "CarWash",
  "@id": "https://www.freshfenders.com/#local",
  "name": "Fresh Fenders Car Wash & Dog Wash",
  "url": "https://www.freshfenders.com/",
  "image": "https://images.squarespace-cdn.com/content/v1/633cf030fe73022aacb5be4e/08a55d50-045a-47b5-8345-4a88a80278b3/Asset+1.png?format=1000w",
  "logo": "https://images.squarespace-cdn.com/content/v1/633cf030fe73022aacb5be4e/08a55d50-045a-47b5-8345-4a88a80278b3/Asset+1.png?format=1000w",
  "telephone": "+1-303-766-7333",
  "email": "info@freshfenders.com",
  "category": "Car Wash",
  "keywords": ["Car Wash", "Car Wash near me"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5384 S Parker Rd",
    "addressLocality": "Aurora",
    "addressRegion": "CO",
    "postalCode": "80015",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.617617,
    "longitude": -104.8172131
  },
  "areaServed": {
    "@type": "City",
    "name": "Aurora, CO"
  },
  "hasMap": "https://www.google.com/maps?ll=39.617617,-104.817213&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=10196363584687833478",
  "sameAs": [
    "https://maps.app.goo.gl/b29hmvQA8cpRqaaC7"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fresh Fenders Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car wash",
          "serviceType": "Car wash"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dog wash",
          "serviceType": "Dog wash"
        }
      }
    ]
  },
  "owner": {
    "@type": "Person",
    "name": "Jocelyn Gonzalez"
  },
  "identifier": [
    {
      "@type": "PropertyValue",
      "propertyID": "googlePlaceCID",
      "value": "10196363584687833478"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "googleMapsPlaceID",
      "value": "ChIJI2mDwZ2JbIcRhgEMWqjCgI0"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "knowledgeGraphID",
      "value": "/g/11sz7178st"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "googleBusinessProfileID",
      "value": "2695146991570665669"
    }
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.freshfenders.com/"
  }
}


  

  

  