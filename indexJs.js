import React from "react"
import ReactDOM from 'react-dom/client'
const foodLogo = new URL('./foodLogo.jpg', import.meta.url).href;

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
              
                <img className="logo" src={foodLogo} alt="the logo here " />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const data = {
  "restaurants": [
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "614581",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e5426ed6-4df6-4543-a58c-0dc2aa81b6df_614581.JPG",
                      "locality": "Nilambur Gudallur Road",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.1K+",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 14.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "14.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/kfc-nilambur-gudallur-road-ramanattukara-rest614581",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "595208",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/c75615b5-18c2-43c4-b2f6-0be0de3e8bb9_595208.JPG",
                      "locality": "Kozhikode",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.5K+",
                      "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 14.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "14.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/pizza-hut-kozhikode-ramanattukara-rest595208",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "637800",
                      "name": "Royal Tasty M",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/9/6db09825-ab2b-4c19-b563-a23bcb3af54e_637800 (1).jpg",
                      "locality": "Srabhi mall",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Kerala",
                        "Chinese"
                      ],
                      "avgRating": 4.4,
                      "parentId": "456745",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 12.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "12.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 22:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹149"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/royal-tasty-m-srabhi-mall-ramanattukara-rest637800",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "912189",
                      "name": "M Dine",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/1a0b3308-d97d-4bab-ae8c-784b124cb0a7_912189.ss.jpg",
                      "locality": "Kozhikode-Nilambur-Gudallur Rd",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Chinese",
                        "Kerala",
                        "South Indian",
                        "Arabian",
                        "Indian",
                        "Grill"
                      ],
                      "avgRating": 4.6,
                      "parentId": "529800",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "897",
                      "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 13.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "13.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/m-dine-kozhikode-nilambur-gudallur-rd-ramanattukara-rest912189",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "970324",
                      "name": "Vipras Pure Veg Hotel",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/9/4c470e10-7eb2-4fa4-8d87-80a42cb9c8ce_970324.JPG",
                      "locality": "Ramanattukara",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Chinese",
                        "Biryani",
                        "Kerala",
                        "South Indian"
                      ],
                      "avgRating": 4.3,
                      "parentId": "568132",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "81",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 13,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "13.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 22:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/vipras-pure-veg-hotel-ramanattukara-rest970324",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1045188",
                      "name": "Dragon Arabia",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/35cd7e98-eafa-4569-8177-b2298adf2a33_1045188.jpg",
                      "locality": "Ramanattukara",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹399 for two",
                      "cuisines": [
                        "South Indian",
                        "Arabian",
                        "Beverages",
                        "Grill"
                      ],
                      "avgRating": 4.6,
                      "parentId": "608009",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "73",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 12.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "12.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹66 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/dragon-arabia-ramanattukara-rest1045188",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1016024",
                      "name": "Sabrosa",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/26/16656d95-424c-4b72-9448-206c3ad08b72_1016024.JPG",
                      "locality": "Ramanattukara",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.2,
                      "parentId": "231768",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "51",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 12.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "12.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/sabrosa-ramanattukara-rest1016024",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "1036164",
                      "name": "New Malabar Hotel",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/30/2eb27047-47c6-457b-b11d-a0b30c796504_1036164.sss.jpg",
                      "locality": "Ramanattukara",
                      "areaName": "Ramanattukara",
                      "costForTwo": "₹249 for two",
                      "cuisines": [
                        "Chinese",
                        "Biryani",
                        "South Indian",
                        "Grill"
                      ],
                      "avgRating": 4.2,
                      "parentId": "147214",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "155",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 10.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "10.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-17 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cdddebad-0402-4bc6-900d-d789613e5926"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/malappuram/new-malabar-hotel-ramanattukara-rest1036164",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  }
                ]
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">

              {
                
               data.restaurants.map((restuarent) => {
                  let resto = restuarent.info
                if(resto.aggregatedDiscountInfoV3?.header) {

                  return ( <RestuarentCard 
                   key={resto.id}
                   name={resto.name}
                   cuisines={resto.cuisines}
                   areaName={resto.areaName}
                   avgRating={resto.avgRating}
                   deliveryTime={resto.sla.slaString}
                   img={resto.cloudinaryImageId}
                   price={resto.aggregatedDiscountInfoV3.header+" "+resto.aggregatedDiscountInfoV3.subHeader}
                    />)
                } else {
                  return ( <RestuarentCard 
                   key={resto.id}
                   name={resto.name}
                   cuisines={resto.cuisines}
                   areaName={resto.areaName}
                   avgRating={resto.avgRating}
                   deliveryTime={resto.sla.slaString}
                   img={resto.cloudinaryImageId}
                    />)
                }
                    
                    })
              }
            </div>
        </div>
    )
}

const RestuarentCard = ({name, cuisines, areaName, avgRating, deliveryTime, img, price}) => {
    return (
        <div className="res-card">
            <div className="res-LogoRoot">
                <img className="res-logo" src={`https://media-assets.swiggy.com/${img}`} alt="res-logo" />
                <div className="price-div">
                <h2>{price}</h2>
                </div>
            </div>
            
            <h3>{name}</h3>
            <h4>{avgRating}Stars</h4>
            <h4>{deliveryTime}</h4>
            <p>{cuisines}</p>
            <p>{areaName}</p>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)