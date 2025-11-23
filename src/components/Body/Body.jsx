import RestroCard from "./RestroCard";
// URL: https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
const restaurants = [
  {
    info: {
      id: "414835",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3b26ee3b-4107-43a4-be89-af1a23c28277_414835.JPG",
      locality: "Khairatabad",
      areaName: "Khairatabad",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.7",
          ratingCount: "985",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/pizza-hut-khairatabad-rest414835",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639526",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
      locality: "City Plaza",
      areaName: "ABIDS",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4.1,
      parentId: "351013",
      avgRatingString: "4.1",
      totalRatingsString: "326",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/dum-safar-biryani-city-plaza-abids-rest639526",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "367769",
      name: "Lucky Restaurant",
      cloudinaryImageId: "qems028i3da5rxf81rbp",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4,
      parentId: "535180",
      avgRatingString: "4.0",
      totalRatingsString: "85K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/lucky-restaurant-banjara-hills-rest367769",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3324",
      name: "Srikanya",
      cloudinaryImageId: "tw4ytwle8yommmgdy4b0",
      locality: "Somajiguda",
      areaName: "Panjagutta",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      avgRating: 4.3,
      parentId: "7317",
      avgRatingString: "4.3",
      totalRatingsString: "91K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "3.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/srikanya-somajiguda-panjagutta-rest3324",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "487214",
      name: "ZAZA Mughal Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/7ebfac9e-877d-4737-882f-bd72d9d07650_487214.jpg",
      locality: "Khairatabad",
      areaName: "Vaibhav Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Awadhi"],
      avgRating: 4.1,
      parentId: "22473",
      avgRatingString: "4.1",
      totalRatingsString: "545",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mughlai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mughlai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/zaza-mughal-biryani-khairatabad-vaibhav-nagar-rest487214",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "681600",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/12e3ef41-1079-47a2-a2b0-411cb9a072be_681600.jpg",
      locality: "Vaibhav Nagar",
      areaName: "Khairatabad",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.3,
      parentId: "11216",
      avgRatingString: "4.3",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/leancrust-pizza-thincrust-experts-vaibhav-nagar-khairatabad-rest681600",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "142670",
      name: "Shah Ghouse Hotel & Restaurant",
      cloudinaryImageId: "bk26jkkqpg55veii0aj9",
      locality: "Lakdi-Ka-Pul",
      areaName: "Banjara Hills",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Chinese", "Tandoor", "Mughlai"],
      avgRating: 4.3,
      parentId: "19271",
      avgRatingString: "4.3",
      totalRatingsString: "87K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 00:01:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "6.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/shah-ghouse-hotel-and-restaurant-lakdi-ka-pul-banjara-hills-rest142670",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355751",
      name: "Grameen Kulfi",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/09b8dfb1-8a49-47ea-a3d4-6ae62d2c7217_355751.JPG",
      locality: "Khairatabad",
      areaName: "Banjara Hills",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.7",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹109",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/grameen-kulfi-khairatabad-banjara-hills-rest355751",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "435640",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/20c1119e-4f5c-4366-9b35-97cd542c4912_435640.JPG",
      locality: "Khairtabad",
      areaName: "Banjara Hills",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery"],
      avgRating: 4.6,
      parentId: "3818",
      avgRatingString: "4.6",
      totalRatingsString: "8.4K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/bakingo-khairtabad-banjara-hills-rest435640",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "838833",
      name: "Wow! China",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/57499db2-b38f-4d77-bc95-3741e96ae74c_838833.JPG",
      locality: "Buddha Poornima Project Area",
      areaName: "Prasad Imax",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese", "Asian", "fastfood", "Beverages", "Snacks"],
      avgRating: 4,
      parentId: "226836",
      avgRatingString: "4.0",
      totalRatingsString: "524",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/wow-china-buddha-poornima-project-area-prasad-imax-rest838833",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "262087",
      name: "Imperial Multicuisine Restaurant",
      cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
      locality: "Banjara Hills",
      areaName: "Redhills",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
      avgRating: 4.3,
      parentId: "543714",
      avgRatingString: "4.3",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹799",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "547809",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/27/3d3b7bf1-b390-45e6-a206-72c572ae7e22_547809.JPG",
      locality: "Himayath Nagar",
      areaName: "Himayath Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "4.8K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "260",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "28108",
      name: "Al Rabea Al Arabi Cafeteria",
      cloudinaryImageId: "jnzmscxd37rbjmgciwt5",
      locality: "Mehdipatnam",
      areaName: "Mehdipatnam",
      costForTwo: "₹250 for two",
      cuisines: ["Arabian", "Lebanese"],
      avgRating: 4.4,
      parentId: "7582",
      avgRatingString: "4.4",
      totalRatingsString: "87K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 01:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/al-rabea-al-arabi-cafeteria-mehdipatnam-rest28108",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "44119",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/1a787057-6e1c-4fac-8969-78d748b20a87_44119.JPG",
      locality: "Masab Tank",
      areaName: "Masab Tank",
      costForTwo: "₹400 for two",
      cuisines: ["Ice Cream", "Beverages"],
      avgRating: 4.2,
      parentId: "5588",
      avgRatingString: "4.2",
      totalRatingsString: "3.8K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "291",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/baskin-robbins-ice-cream-desserts-masab-tank-rest44119",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "233054",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/27/365de523-1754-4fbc-af56-96dfbbfce9df_233054.JPG",
      locality: "Beside Little Flower Primary school",
      areaName: "Abids",
      costForTwo: "₹450 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery", "Beverages"],
      avgRating: 4.1,
      parentId: "4444",
      avgRatingString: "4.1",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/sweet-truth-cake-and-desserts-beside-little-flower-primary-school-abids-rest233054",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "348662",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/cd445f9e-d684-45c9-ac7d-021cc282f61a_348662.JPG",
      locality: "VITHALWADI",
      areaName: "Himayath Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.4,
      parentId: "7003",
      avgRatingString: "4.4",
      totalRatingsString: "8.9K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/cakezone-patisserie-vithalwadi-himayath-nagar-rest348662",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "487211",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/821f692b-57a9-4304-9c2b-cd847e59775a_487211.jpg",
      locality: "Vaibhav Nagar",
      areaName: "Khairatabad",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.4,
      parentId: "10655",
      avgRatingString: "4.4",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mughlai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mughlai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/box8-desi-meals-vaibhav-nagar-khairatabad-rest487211",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "643820",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/4ebe98ff-c62d-4c4c-bb73-fc1dc87f63ea_643820.jpg",
      locality: "Vaibhav Nagar",
      areaName: "Khairtabad",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.5,
      parentId: "355285",
      avgRatingString: "4.5",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "High%20Protein/rx%20tag%205.png",
            description: "High Protein",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "High Protein",
                  imageId: "High%20Protein/rx%20tag%205.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/wefit-protein-bowls-salads-and-sandwiches-vaibhav-nagar-khairtabad-rest643820",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750384",
      name: "Daily Kitchen - Everyday Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/6a47ea31-f2bd-42d5-9905-5bcd2f967d24_750384.jpg",
      locality: "Vaibhav Nagar",
      areaName: "Masab Tank",
      costForTwo: "₹250 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.4,
      parentId: "444382",
      avgRatingString: "4.4",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/daily-kitchen-everyday-homely-meals-vaibhav-nagar-masab-tank-rest750384",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "798552",
      name: "Harley's Fine Baking",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/16/bff32444-650e-40cb-8929-a8693035db37_798552.JPG",
      locality: "Amberpet Circle No 16",
      areaName: "Abids",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "Desserts", "Burgers", "Fast Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "11126",
      avgRatingString: "4.6",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-24 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6b376b33-4447-489a-86a8-aa11ac640280",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/harleys-fine-baking-amberpet-circle-no-16-abids-rest798552",
      type: "WEBLINK",
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines..."
        />
        <button>Search</button>
      </div>
      <div>
        <h2>Restaurants</h2>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => <RestroCard key={restaurant.info.id} restroData={restaurant} />)}
        </div>
      </div>
    </div>
  );
};

export default Body;
