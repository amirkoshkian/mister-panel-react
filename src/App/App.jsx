////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports General
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  ArrowForward,
  Settings,
  FormatListBulleted,
  CalendarToday,
  Notifications,
  Fullscreen,
  Widgets,
  FullscreenExit,
  Search,
  Gavel,
  Gamepad,
  DarkMode,
  Apps,
  LightMode,
  Language,
  Message,
  PermIdentityOutlined,
  Comment,
  MailOutlined,
  BarChart,
  ChatBubbleOutlineOutlined,
  AttachMoneyOutlined,
  HelpOutlineOutlined,
  MovingOutlined,
  LoginOutlined,
  Close,
  AddCircleOutlineOutlined,
  Delete,
  Edit,
  ArrowUpward,
  AppShortcut,
  Dashboard,
  KeyboardArrowDown,
  Analytics,
  SupportAgent,
  ShoppingCart,
  Person,
  PersonAddAltOutlined,
  Group,
  Payment,
  RequestPage,
  Payments,
  SupervisedUserCircleOutlined,
  AccessibilityOutlined,
  AddCircleOutlined,
  PlaceOutlined,
  MenuBookOutlined,
  ContactPageOutlined,
  DataUsageOutlined,
  FeaturedPlayListOutlined,
  CodeOutlined,
  TagOutlined,
  EventSeatOutlined,
  WorkOutlined,
  ProductionQuantityLimitsOutlined,
  SettingsApplicationsOutlined,
  FilterListOutlined,
  ListAlt,
  LocationCityOutlined,
  LanguageOutlined,
  PriceCheckOutlined,
  ClassOutlined,
  Login,
  TableRows,
  RotateLeft,
  LockOpen,
  Collections,
  Password,
  DriveFileMove,
  InsertDriveFile,
  LiveHelp,
  CheckBoxOutlineBlank,
  ManageAccounts,
  Tune,
  Error,
  ErrorOutline,
  ReportGmailerrorred,
  FmdBad,
  PagesOutlined,
  AdminPanelSettings,
  AddAlert,
  Stars,
  NotificationsNone,
  Feedback,
  Chat,
  Pages,
  AlternateEmail,
  IosShare,
  Home,
  Event,
  Category,
  Tag,
  Image,
  SportsSoccer,
  ChangeCircle,
  SettingsSystemDaydream,
  FormatQuoteOutlined,
  BorderColor,
  MediationOutlined,
  UpgradeOutlined,
  ControlPointOutlined,
  DeleteOutlineOutlined,
  YoutubeSearchedForOutlined,
  GiteOutlined,
  HouseOutlined,
  MiscellaneousServicesOutlined,
  MedicalServices,
  Work,
  AddBoxOutlined,
  AllInclusiveOutlined,
  WorkOutlineOutlined,
  ProductionQuantityLimits,
  PersonPinCircleOutlined,
  Add,
  Inventory2,
  AllOut,
  RequestQuoteOutlined,
  Discount,
  PostAdd,
  Newspaper,
  Place,
  LocationSearching,
  PushPin,
  AddCard,
  AddBusiness,
  AddShoppingCart,
  Contactless,
  Campaign,
  AddBox,
  Create,
  Google,
  SettingsApplications,
  AppRegistration,
  Diamond,
  ToggleOn,
  LocalLibrary,
  Logout,
} from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports General

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports Route
// Start Import Ads
import AdsAdPricing from "./Pages/Ads/Ads/AdPricing/AdPricing";
import AdsAdRequestAndEnquiry from "./Pages/Ads/Ads/AdRequestAndEnquiry/AdRequestAndEnquiry";
import AdsCreateNewAds from "./Pages/Ads/Ads/CreateNewAds/CreateNewAds";
import AdsCuurentAds from "./Pages/Ads/Ads/CuurentAds/CuurentAds";
import AdsGoogleAdSense from "./Pages/Ads/Ads/GoogleAdSense/GoogleAdSense";
import AdsAddNewSlider from "./Pages/Ads/SliderImages/AddNewSlider/AddNewSlider";
import AdsAllSliderImages from "./Pages/Ads/SliderImages/AllSliderImages/AllSliderImages";
import AdsDeleteSlider from "./Pages/Ads/SliderImages/DeleteSlider/DeleteSlider";
import AdsEditSlider from "./Pages/Ads/SliderImages/EditSlider/EditSlider";
// End Import Ads

// Start Import Appearance
import AppearanceColorSetting from "./Pages/Appearance/ColorSetting/ColorSetting";
import AppearanceFeatureEnableAndDisable from "./Pages/Appearance/FeatureEnableAndDisable/FeatureEnableAndDisable";
import AppearanceMediaLibrary from "./Pages/Appearance/MediaLibrary/MediaLibrary";
import AppearanceWebsiteLogo from "./Pages/Appearance/WebsiteLogo/WebsiteLogo";
// End Import Appearance

// Start Import Blog
import BlogAddNewBlogs from "./Pages/Blog/AddNewBlogs/AddNewBlogs";
import BlogAllBlogs from "./Pages/Blog/AllBlogs/AllBlogs";
import BlogDeleteBlogs from "./Pages/Blog/DeleteBlogs/DeleteBlogs";
import BlogEditBlogs from "./Pages/Blog/EditBlogs/EditBlogs";
// End Import Blog

// Start Import Cms
import CmsAllTextChange from "./Pages/Cms/AllTextChange/AllTextChange";
import CmsDummyImages from "./Pages/Cms/DummyImages/DummyImages";
import CmsFooterFooterCMS from "./Pages/Cms/Footer/FooterCMS/FooterCMS";
import CmsFooterFooterPopularTags from "./Pages/Cms/Footer/FooterPopularTags/FooterPopularTags";
import CmsHomePageChooseCategory from "./Pages/Cms/HomePage/ChooseCategory/ChooseCategory";
import CmsHomePageChooseTrendingCategory from "./Pages/Cms/HomePage/ChooseTrendingCategory/ChooseTrendingCategory";
import CmsHomePageFeatureEvents from "./Pages/Cms/HomePage/FeatureEvents/FeatureEvents";
import CmsHomePageHomePageTemplate from "./Pages/Cms/HomePage/HomePageTemplate/HomePageTemplate";
import CmsHomePagePopularBusiness from "./Pages/Cms/HomePage/PopularBusiness/PopularBusiness";
import CmsHomePageTopSection from "./Pages/Cms/HomePage/TopSection/TopSection";
import CmsHomePageTopServices from "./Pages/Cms/HomePage/TopServices/TopServices";
import CmsMailTemplates from "./Pages/Cms/MailTemplates/MailTemplates";
import CmsSocialMediaShare from "./Pages/Cms/SocialMediaShare/SocialMediaShare";
// End Import Cms

// Start Import CouponAndDeals
import CouponAndDealsAddNewCoupon from "./Pages/CouponAndDeals/AddNewCoupon/AddNewCoupon";
import CouponAndDealsAllCoupons from "./Pages/CouponAndDeals/AllCoupons/AllCoupons";
// End Import CouponAndDeals

// Start Import Dashboard
import DashboardAnalytics from "./Pages/Dashboard/Analytics/Analytics";
import DashboardCRM from "./Pages/Dashboard/CRM/CRM";
import DashboardEcommerce from "./Pages/Dashboard/Ecommerce/Ecommerce";
// End Import Dashboard

// Start Import Events
import EventsAddNewEvents from "./Pages/Events/AddNewEvents/AddNewEvents";
import EventsAllEvents from "./Pages/Events/AllEvents/AllEvents";
// End Import Events

// Start Import Jobs
import JobsJobCategoryAddNewCategory from "./Pages/Jobs/JobCategory/AddNewCategory/AddNewCategory";
import JobsJobCategoryAddNewSubCategory from "./Pages/Jobs/JobCategory/AddNewSubCategory/AddNewSubCategory";
import JobsJobCategoryAllCategory from "./Pages/Jobs/JobCategory/AllCategory/AllCategory";
import JobsJobCategoryAllSubCategory from "./Pages/Jobs/JobCategory/AllSubCategory/AllSubCategory";
import JobsJobCityAddNewJobCity from "./Pages/Jobs/JobCity/AddNewJobCity/AddNewJobCity";
import JobsJobCityAllJobCity from "./Pages/Jobs/JobCity/AllJobCity/AllJobCity";
import JobsJobsAddNewJobPost from "./Pages/Jobs/Jobs/AddNewJobPost/AddNewJobPost";
import JobsJobsAllAppliedJobs from "./Pages/Jobs/Jobs/AllAppliedJobs/AllAppliedJobs";
import JobsJobsAllJobs from "./Pages/Jobs/Jobs/AllJobs/AllJobs";
import JobsJobsHomePagePremiumJobs from "./Pages/Jobs/Jobs/HomePagePremiumJobs/HomePagePremiumJobs";
import JobsJobsJobSeekerDetails from "./Pages/Jobs/Jobs/JobSeekerDetails/JobSeekerDetails";
import JobsJobSkillSetAddNewSkillSet from "./Pages/Jobs/JobSkillSet/AddNewSkillSet/AddNewSkillSet";
import JobsJobSkillSetAllSkillSet from "./Pages/Jobs/JobSkillSet/AllSkillSet/AllSkillSet";
// End Import Jobs

// End Import Listings
import ListingsCityAddNewCity from "./Pages/Listings/City/AddNewCity/AddNewCity";
import ListingsCityAllCity from "./Pages/Listings/City/AllCity/AllCity";
import ListingsCountryAddNewCountry from "./Pages/Listings/Country/AddNewCountry/AddNewCountry";
import ListingsCountryAllContry from "./Pages/Listings/Country/AllContry/AllContry";
import ListingsEnqueryAndGetQuoteAllEnquery from "./Pages/Listings/EnqueryAndGetQuote/AllEnquery/AllEnquery";
import ListingsEnqueryAndGetQuoteSavedEnquery from "./Pages/Listings/EnqueryAndGetQuote/SavedEnquery/SavedEnquery";
import ListingsListingCategoryAddNewCategory from "./Pages/Listings/ListingCategory/AddNewCategory/AddNewCategory";
import ListingsListingCategoryAddNewSubCategory from "./Pages/Listings/ListingCategory/AddNewSubCategory/AddNewSubCategory";
import ListingsListingCategoryAllCategory from "./Pages/Listings/ListingCategory/AllCategory/AllCategory";
import ListingsListingCategoryAllSubCategory from "./Pages/Listings/ListingCategory/AllSubCategory/AllSubCategory";
import ListingsListingCategoryChangeCategoryPosition from "./Pages/Listings/ListingCategory/ChangeCategoryPosition/ChangeCategoryPosition";
import ListingsListingFilterAllFilter from "./Pages/Listings/ListingFilter/AllFilter/AllFilter";
import ListingsListingFilterFeatures from "./Pages/Listings/ListingFilter/Features/Features";
import ListingsListingPromotionAllPointsHistory from "./Pages/Listings/ListingPromotion/AllPointsHistory/AllPointsHistory";
import ListingsListingPromotionAllPromotion from "./Pages/Listings/ListingPromotion/AllPromotion/AllPromotion";
import ListingsListingPromotionCreateNewPromotions from "./Pages/Listings/ListingPromotion/CreateNewPromotions/CreateNewPromotions";
import ListingsListingPromotionPointsSetting from "./Pages/Listings/ListingPromotion/PointsSetting/PointsSetting";
import ListingsListingsAddNewListings from "./Pages/Listings/Listings/AddNewListings/AddNewListings";
import ListingsListingsAllClaimRequest from "./Pages/Listings/Listings/AllClaimRequest/AllClaimRequest";
import ListingsListingsAllListings from "./Pages/Listings/Listings/AllListings/AllListings";
import ListingsListingsCreateDuplicateListings from "./Pages/Listings/Listings/CreateDuplicateListings/CreateDuplicateListings";
import ListingsListingsTrashListing from "./Pages/Listings/Listings/TrashListing/TrashListing";
import ListingsReviewsAllEnquiry from "./Pages/Listings/Reviews/AllEnquiry/AllEnquiry";
import ListingsReviewsSavedEnquiry from "./Pages/Listings/Reviews/SavedEnquiry/SavedEnquiry";
import ListingsStateAddNewState from "./Pages/Listings/State/AddNewState/AddNewState";
import ListingsStateAllState from "./Pages/Listings/State/AllState/AllState";
import ListingsVillageAddNewVillage from "./Pages/Listings/Village/AddNewVillage/AddNewVillage";
import ListingsVillageAllVillage from "./Pages/Listings/Village/AllVillage/AllVillage";
// End Import Listings

// Start Import LogOut
import LogOut from "./Pages/LogOut/LogOut";
// End Import LogOut

// Start Import News
import NewsAddNewNews from "./Pages/News/AddNewNews/AddNewNews";
import NewsAllNews from "./Pages/News/AllNews/AllNews";
import NewsDeleteNews from "./Pages/News/DeleteNews/DeleteNews";
import NewsEditNews from "./Pages/News/EditNews/EditNews";
// End Import News

// Start Import NewsAndMagazines
import NewsAndMagazinesAllNewsPostsAddNewNews from "./Pages/NewsAndMagazines/AllNewsPosts/AddNewNews/AddNewNews";
import NewsAndMagazinesAllNewsPostsAllNews from "./Pages/NewsAndMagazines/AllNewsPosts/AllNews/AllNews";
import NewsAndMagazinesCategoryAddNewCategory from "./Pages/NewsAndMagazines/Category/AddNewCategory/AddNewCategory";
import NewsAndMagazinesCategoryAllCategory from "./Pages/NewsAndMagazines/Category/AllCategory/AllCategory";
import NewsAndMagazinesCategoryCategoryMenuOrder from "./Pages/NewsAndMagazines/Category/CategoryMenuOrder/CategoryMenuOrder";
import NewsAndMagazinesNewHomePageSliderPosts from "./Pages/NewsAndMagazines/NewHomePage/SliderPosts/SliderPosts";
import NewsAndMagazinesNewHomePageSliderPostsMenuOrder from "./Pages/NewsAndMagazines/NewHomePage/SliderPostsMenuOrder/SliderPostsMenuOrder";
import NewsAndMagazinesNewHomePageSocialMedia from "./Pages/NewsAndMagazines/NewHomePage/SocialMedia/SocialMedia";
import NewsAndMagazinesNewHomePageTrendingPosts from "./Pages/NewsAndMagazines/NewHomePage/TrendingPosts/TrendingPosts";
import NewsAndMagazinesNewHomePageTrendingPostsMenuOrder from "./Pages/NewsAndMagazines/NewHomePage/TrendingPostsMenuOrder/TrendingPostsMenuOrder";
import NewsAndMagazines from "./Pages/NewsAndMagazines/NewsSubscribers/NewsSubscribers";
// End Import NewsAndMagazines

// Start Import Others
import OthersActivity from "./Pages/Others/Activity/Activity";
import OthersChat from "./Pages/Others/Chat/Chat";
import OthersFeedBacksAllFeedBacks from "./Pages/Others/FeedBacks/AllFeedBacks/AllFeedBacks";
import OthersImportAndExportExportData from "./Pages/Others/ImportAndExport/ExportData/ExportData";
import OthersImportAndExportImportData from "./Pages/Others/ImportAndExport/ImportData/ImportData";
import OthersSendNotificationAllNotification from "./Pages/Others/SendNotification/AllNotification/AllNotification";
import OthersSendNotificationCreateNewNotification from "./Pages/Others/SendNotification/CreateNewNotification/CreateNewNotification";
import OthersSubAdminAllSubAdmins from "./Pages/Others/SubAdmin/AllSubAdmins/AllSubAdmins";
import OthersSubAdminCreateNewSubAdmins from "./Pages/Others/SubAdmin/CreateNewSubAdmins/CreateNewSubAdmins";
import OthersToDoList from "./Pages/Others/ToDoList/ToDoList";
// End Import Others

// Start Import PagesAddition
import PagesAddition400Error from "./Pages/PagesAddition/400Error/400Error";
import PagesAddition403Error from "./Pages/PagesAddition/403Error/403Error";
import PagesAddition404Error from "./Pages/PagesAddition/404Error/404Error";
import PagesAddition408Error from "./Pages/PagesAddition/408Error/408Error";
import PagesAddition500Error from "./Pages/PagesAddition/500Error/500Error";
import PagesAddition501Error from "./Pages/PagesAddition/501Error/501Error";
import PagesAddition502Error from "./Pages/PagesAddition/502Error/502Error";
import PagesAddition503Error from "./Pages/PagesAddition/503Error/503Error";
import PagesAdditionAccountSetting from "./Pages/PagesAddition/AccountSetting/AccountSetting";
import PagesAdditionBlank from "./Pages/PagesAddition/Blank/Blank";
import PagesAdditionCalendar from "./Pages/PagesAddition/Calendar/Calendar";
import PagesAdditionCharts from "./Pages/PagesAddition/Charts/Charts";
import PagesAdditionChat from "./Pages/PagesAddition/Chat/Chat";
import PagesAdditionFAQ from "./Pages/PagesAddition/FAQ/FAQ";
import PagesAdditionFileAttachments from "./Pages/PagesAddition/FileAttachments/FileAttachments";
import PagesAdditionFileDetails from "./Pages/PagesAddition/FileDetails/FileDetails";
import PagesAdditionFileManager from "./Pages/PagesAddition/FileManager/FileManager";
import PagesAdditionFileManagerList from "./Pages/PagesAddition/FileManagerList/FileManagerList";
import PagesAdditionForgetPassword from "./Pages/PagesAddition/ForgetPassword/ForgetPassword";
import PagesAdditionGallery from "./Pages/PagesAddition/Gallery/Gallery";
import PagesAdditionLockScreen from "./Pages/PagesAddition/LockScreen/LockScreen";
import PagesAdditionRegister from "./Pages/PagesAddition/Register/Register";
import PagesAdditionLogin from "./Pages/PagesAddition/Login/Login";
import PagesAdditionResetPassword from "./Pages/PagesAddition/ResetPassword/ResetPassword";
import PagesAdditionShortcut from "./Pages/PagesAddition/Shortcut/Shortcut";
import PagesAdditionSlider from "./Pages/PagesAddition/Slider/Slider";
import PagesAdditionTables from "./Pages/PagesAddition/Tables/Tables";
import PagesAdditionTerms from "./Pages/PagesAddition/Terms/Terms";
// End Import PagesAddition

// Start Import Payment
import PaymentAllPayment from "./Pages/Payment/AllPayment/AllPayment";
import PaymentInvoiceCreateNewInvoice from "./Pages/Payment/Invoice/CreateNewInvoice/CreateNewInvoice";
import PaymentInvoiceSendInvoice from "./Pages/Payment/Invoice/SendInvoice/SendInvoice";
import PaymentInvoiceSharedInvoices from "./Pages/Payment/Invoice/SharedInvoices/SharedInvoices";
import PaymentPaymentGeteway from "./Pages/Payment/PaymentGeteway/PaymentGeteway";
import PaymentPricingPlans from "./Pages/Payment/PricingPlans/PricingPlans";
// End Import Payment

// Start Import Places
import PlacesAllPlaces from "./Pages/Places/AllPlaces/AllPlaces";
import PlacesCategoryAllCategory from "./Pages/Places/Category/AllCategory/AllCategory";
import PlacesCategoryCategoryMenuOrder from "./Pages/Places/Category/CategoryMenuOrder/CategoryMenuOrder";
import PlacesPlaceRequest from "./Pages/Places/PlaceRequest/PlaceRequest";
// End Import Places

// Start Import Product
import ProductProductAddNewProduct from "./Pages/Product/Product/AddNewProduct/AddNewProduct";
import ProductProductAllProduct from "./Pages/Product/Product/AllProduct/AllProduct";
import ProductProductCategoryAddNewCategory from "./Pages/Product/ProductCategory/AddNewCategory/AddNewCategory";
import ProductProductCategoryAddNewSubCategory from "./Pages/Product/ProductCategory/AddNewSubCategory/AddNewSubCategory";
import ProductProductCategoryAllCategory from "./Pages/Product/ProductCategory/AllCategory/AllCategory";
import ProductProductCategoryAllSubCategory from "./Pages/Product/ProductCategory/AllSubCategory/AllSubCategory";
// End Import Product

// Start Import SeoSettings
import SeoSettingsSearchListAddNew from "./Pages/SeoSettings/SearchSettings/SearchList/AddNew/AddNew";
import SeoSettingsSearchListSearchList from "./Pages/SeoSettings/SearchSettings/SearchList/SearchList/SearchList";
import SeoSettingsSearchPositionsChangePositions from "./Pages/SeoSettings/SearchSettings/SearchPositions/ChangePositions/ChangePositions";
import SeoSettingsEBookAndDigitalPagesAddNewPage from "./Pages/SeoSettings/SeoSettings/EBookAndDigitalPages/AddNewPage/AddNewPage";
import SeoSettingsEBookAndDigitalPagesAllPages from "./Pages/SeoSettings/SeoSettings/EBookAndDigitalPages/AllPages/AllPages";
import SeoSettingsGeneralPromotionPagesAddNewPage from "./Pages/SeoSettings/SeoSettings/GeneralPromotionPages/AddNewPage/AddNewPage";
import SeoSettingsGeneralPromotionPagesAllPages from "./Pages/SeoSettings/SeoSettings/GeneralPromotionPages/AllPages/AllPages";
import SeoSettingsGoogleAnalyticsGoogleAnalyticsCode from "./Pages/SeoSettings/SeoSettings/GoogleAnalytics/GoogleAnalyticsCode/GoogleAnalyticsCode";
import SeoSettingsListingCategorySeoOption from "./Pages/SeoSettings/SeoSettings/ListingCategory/SeoOption/SeoOption";
import SeoSettingsMetaTagsAllPages from "./Pages/SeoSettings/SeoSettings/MetaTags/AllPages/AllPages";
import SeoSettingsMetaTagsBlogSeoOption from "./Pages/SeoSettings/SeoSettings/MetaTags/BlogSeoOption/BlogSeoOption";
import SeoSettingsMetaTagsEventSeoOption from "./Pages/SeoSettings/SeoSettings/MetaTags/EventSeoOption/EventSeoOption";
import SeoSettingsMetaTagsJobSeoOption from "./Pages/SeoSettings/SeoSettings/MetaTags/JobSeoOption/JobSeoOption";
import SeoSettingsMetaTagsListingSeoOption from "./Pages/SeoSettings/SeoSettings/MetaTags/ListingSeoOption/ListingSeoOption";
import SeoSettingsMetaTagsProductSeoOption from "./Pages/SeoSettings/SeoSettings/MetaTags/ProductSeoOption/ProductSeoOption";
import SeoSettingsMetaTagsServiceExpertSeoOption from "./Pages/SeoSettings/SeoSettings/MetaTags/ServiceExpertSeoOption/ServiceExpertSeoOption";
import SeoSettingsSitemapXMLSitemap from "./Pages/SeoSettings/SeoSettings/Sitemap/XMLSitemap/XMLSitemap";
import SeoSettingsTargetListingsPromotionAddNewPage from "./Pages/SeoSettings/SeoSettings/TargetListingsPromotion/AddNewPage/AddNewPage";
import SeoSettingsTargetListingsPromotionAllPages from "./Pages/SeoSettings/SeoSettings/TargetListingsPromotion/AllPages/AllPages";
// End Import SeoSettings

// Start Import ServiceExperts
import ServiceExpertsAcceptPaymentModesAddNewPaymentType from "./Pages/ServiceExperts/AcceptPaymentModes/AddNewPaymentType/AddNewPaymentType";
import ServiceExpertsAcceptPaymentModesPaymentType from "./Pages/ServiceExperts/AcceptPaymentModes/PaymentType/PaymentType";
import ServiceExpertsExpertCitiesAddNewExpertArea from "./Pages/ServiceExperts/ExpertCitiesAndAreas/AddNewExpertArea/AddNewExpertArea";
import ServiceExpertsExpertCitiesAddNewExpertCity from "./Pages/ServiceExperts/ExpertCitiesAndAreas/AddNewExpertCity/AddNewExpertCity";
import ServiceExpertsExpertCitiesAllExpertAreas from "./Pages/ServiceExperts/ExpertCitiesAndAreas/AllExpertAreas/AllExpertAreas";
import ServiceExpertsExpertCitiesAllExpertCity from "./Pages/ServiceExperts/ExpertCitiesAndAreas/AllExpertCity/AllExpertCity";
import ServiceExpertsExpertsCategoryAddNewCategory from "./Pages/ServiceExperts/ExpertsCategory/AddNewCategory/AddNewCategory";
import ServiceExpertsExpertsCategoryAddNewSubCategory from "./Pages/ServiceExperts/ExpertsCategory/AddNewSubCategory/AddNewSubCategory";
import ServiceExpertsExpertsCategoryAllCategory from "./Pages/ServiceExperts/ExpertsCategory/AllCategory/AllCategory";
import ServiceExpertsExpertsCategoryAllSubCategory from "./Pages/ServiceExperts/ExpertsCategory/AllSubCategory/AllSubCategory";
import ServiceExpertsExpertsCategoryHomepageCategoryOrder from "./Pages/ServiceExperts/ExpertsCategory/HomepageCategoryOrder/HomepageCategoryOrder";
import ServiceExpertsServiceExpertsAddNewExpert from "./Pages/ServiceExperts/ServiceExperts/AddNewExpert/AddNewExpert";
import ServiceExpertsServiceExpertsAllExpertLades from "./Pages/ServiceExperts/ServiceExperts/AllExpertLades/AllExpertLades";
import ServiceExpertsServiceExpertsAllExperts from "./Pages/ServiceExperts/ServiceExperts/AllExperts/AllExperts";
import ServiceExpertsServiceExpertsAllGeneralLeads from "./Pages/ServiceExperts/ServiceExperts/AllGeneralLeads/AllGeneralLeads";
import ServiceExpertsServiceExpertsServiceExpertAdminInfo from "./Pages/ServiceExperts/ServiceExperts/ServiceExpertAdminInfo/ServiceExpertAdminInfo";
// End Import ServiceExperts

// Start Import Settings
import SettingsSiteSetting from "./Pages/Settings/SiteSetting/SiteSetting";
// End Import Settings

// Start Import Users
import UsersAddNewUsers from "./Pages/Users/AddNewUsers/AddNewUsers";
import UsersAllNonPaidUsers from "./Pages/Users/AllNonPaidUsers/AllNonPaidUsers";
import UsersAllPaidUsers from "./Pages/Users/AllPaidUsers/AllPaidUsers";
import UsersAllUsers from "./Pages/Users/AllUsers/AllUsers";
import UsersAllUsersGeneral from "./Pages/Users/AllUsersGeneral/AllUsersGeneral";
import UsersAllUsersServiceProviders from "./Pages/Users/AllUsersServiceProviders/AllUsersServiceProviders";
import UsersFreeUsers from "./Pages/Users/FreeUsers/FreeUsers";
import UsersNewCODPaymentRequest from "./Pages/Users/NewCODPaymentRequest/NewCODPaymentRequest";
import UsersNewUserRequests from "./Pages/Users/NewUserRequests/NewUserRequests";
import UsersPremiumUsers from "./Pages/Users/PremiumUsers/PremiumUsers";
import UsersPremiumUsersPlus from "./Pages/Users/PremiumUsersPlus/PremiumUsersPlus";
import UsersStandardUsers from "./Pages/Users/StandardUsers/StandardUsers";
// End Import Users

// Start Import Widgets
import WidgetsButtons from "./Pages/Widgets/Buttons/Buttons";
import WidgetsColors from "./Pages/Widgets/Colors/Colors";
import WidgetsIcons from "./Pages/Widgets/Icons/Icon";
import WidgetsWidget from "./Pages/Widgets/Widgets/Widget";
// End Import Widgets
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports Route

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class App extends React.Component {
  ////////////////////////////////////////////////////////////////////// Start Section Constructor
  constructor(props) {
    super(props);
    let ToDoListData = sessionStorage.getItem("ToDoListData");
    let NotificationsData = sessionStorage.getItem("NotificationsData");
    let MessageData = sessionStorage.getItem("MessageData");
    let MpTheme = sessionStorage.getItem("MpTheme");
    let MpThemeOther = sessionStorage.getItem("MpThemeOther");
    let MpThemeDropdownMenu = sessionStorage.getItem("MpThemeDropdownMenu");
    let MpThemeColor = sessionStorage.getItem("MpThemeColor");
    let MpThemeOtherHover = sessionStorage.getItem("MpThemeOtherHover");
    let Root = document.querySelector(":root");

    this.state = {
      ToDoListData: JSON.parse(ToDoListData),
      NotificationsData: JSON.parse(NotificationsData),
      MessageData: JSON.parse(MessageData),
      LanguageData: [
        {
          Id: "1",
          ClassName: "active",
          Img: "/Assets/Images/Counrty/Persian.png",
          Text: "فارسی",
        },
        {
          Id: "2",
          ClassName: "",
          Img: "/Assets/Images/Counrty/English.png",
          Text: "انگلیسی",
        },
        {
          Id: "3",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Chinese.png",
          Text: "چینی",
        },
        {
          Id: "4",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Spanish.png",
          Text: "اسپانیایی",
        },
        {
          Id: "5",
          ClassName: "",
          Img: "/Assets/Images/Counrty/French.png",
          Text: "فرانسوی",
        },
        {
          Id: "6",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Portuguese.png",
          Text: "پرتغالی",
        },
        {
          Id: "7",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Hindi.png",
          Text: "هندی",
        },
        {
          Id: "8",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Russian.png",
          Text: "روسی",
        },
        {
          Id: "9",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Arabic.png",
          Text: "عربی",
        },
        {
          Id: "10",
          ClassName: "",
          Img: "/Assets/Images/Counrty/German.png",
          Text: "المانی",
        },
        {
          Id: "11",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Japanese.png",
          Text: "ژاپنی",
        },
        { Id: "12", Img: "/Assets/Images/Counrty/Turkish.png", Text: "ترکی" },
        {
          Id: "13",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Korean.png",
          Text: "کره ای",
        },
        { Id: "14", Img: "/Assets/Images/Counrty/Norway.png", Text: "نروژی" },
        {
          Id: "15",
          ClassName: "",
          Img: "/Assets/Images/Counrty/Sverige.png",
          Text: "سوئدی",
        },
      ],
      StateIconDarkLightMode: true,
      IconDarkLightMode: <LightMode titleAccess="تم روشن" />,
      StateFullScreen: false,
      StateIconFullScreen: true,
      IconFullScreen: <Fullscreen titleAccess="رفتن به حالت تمام صفحه" />,
      StateHeaderPanel: true,
      StateMenuPanel: true,
      StateIconMenuPanel: false,
      MpTheme: `${MpTheme}`,
      MpThemeOther: `${MpThemeOther}`,
      MpThemeOtherHover: `${MpThemeOtherHover}`,
      MpThemeDropdownMenu: `${MpThemeDropdownMenu}`,
      MpThemeColor: `${MpThemeColor}`,
    };

    Root.style.setProperty("--mp-theme", `${MpTheme}`);
    Root.style.setProperty("--mp-theme-other", `${MpThemeOther}`);
    Root.style.setProperty("--mp-theme-other-hover", `${MpThemeOtherHover}`);
    Root.style.setProperty(
      "--mp-theme-dropdown-menu",
      `${MpThemeDropdownMenu}`
    );
    Root.style.setProperty("--mp-theme-color", `${MpThemeColor}`);

    if (
      !MpTheme &&
      !MpThemeOther &&
      !MpThemeOtherHover &&
      !MpThemeDropdownMenu &&
      !MpThemeColor
    ) {
      this.FuncResetSetting();
    }
    if (!ToDoListData || ToDoListData === "[]") {
      sessionStorage.setItem(
        "ToDoListData",
        JSON.stringify([
          { Id: "1", Text: "درست کردن سئو بخش فروشگاه", Complete: true },
          { Id: "2", Text: "درست کردن تایتل های لینک ها", Complete: false },
          { Id: "3", Text: "درست کردن مسیر فرتور پست شماره 20", Complete: true },
          { Id: "4", Text: "درست کردن مسیر فرتور پست شماره 30", Complete: false },
          { Id: "5", Text: "درست کردن مسیر فرتور پست شماره 50", Complete: true },
          { Id: "6", Text: "درست کردن مسیر فرتور پست شماره 22", Complete: true },
          { Id: "7", Text: "درست کردن مسیر فرتور پست شماره 26", Complete: false },
          {
            Id: "8",
            Text: "ست کردن تایتل پست جدید با شماره ای دی 402",
            Complete: true,
          },
          { Id: "9", Text: "درست کردن مسیر فرتور شماره 75", Complete: false },
          { Id: "10", Text: "درست کردن سئو بخش گالری سایت", Complete: true },
          { Id: "11", Text: "درست کردن سئو بخش گالری سایت", Complete: false },
          { Id: "12", Text: "درست کردن سئو بخش گالری سایت", Complete: true },
          { Id: "13", Text: "درست کردن سئو بخش گالری سایت", Complete: false },
          { Id: "14", Text: "درست کردن سئو بخش گالری سایت", Complete: true },
          { Id: "15", Text: "درست کردن سئو بخش گالری سایت", Complete: false },
        ])
      );
    }
    if (!NotificationsData || NotificationsData === "[]") {
      sessionStorage.setItem(
        "NotificationsData",
        JSON.stringify([
          {
            Id: "1",
            Link: "/OthersSendNotificationAllNotification",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا حساب کاربری خود را فعال کنید",
            Time: "4 روز قبل",
          },
          {
            Id: "2",
            Link: "/OthersSendNotificationAllNotification",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا حساب کاربری خود را فعال کنید",
            Time: "2 روز قبل",
          },
          {
            Id: "3",
            Link: "/OthersSendNotificationAllNotification",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا حساب کاربری خود را فعال کنید",
            Time: "5 روز قبل",
          },
          {
            Id: "4",
            Link: "/OthersSendNotificationAllNotification",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا حساب کاربری خود را فعال کنید",
            Time: "1 روز قبل",
          },
          {
            Id: "5",
            Link: "/OthersSendNotificationAllNotification",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا حساب کاربری خود را فعال کنید",
            Time: "3 روز قبل",
          },
        ])
      );
    }
    if (!MessageData || MessageData === "[]") {
      sessionStorage.setItem(
        "MessageData",
        JSON.stringify([
          {
            Id: "1",
            Link: "/OthersChat",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا محصول شماره 1 را ویرایش کنید",
            Time: "4 روز قبل",
          },
          {
            Id: "2",
            Link: "/OthersChat",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا محصول شماره 2 را ویرایش کنید",
            Time: "3 روز قبل",
          },
          {
            Id: "3",
            Link: "/OthersChat",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا محصول شماره 3 را ویرایش کنید",
            Time: "2 روز قبل",
          },
          {
            Id: "4",
            Link: "/OthersChat",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا محصول شماره 4 را ویرایش کنید",
            Time: "1 روز قبل",
          },
          {
            Id: "5",
            Link: "/OthersChat",
            Img: "/Assets/Images/Profiles/Profile.png",
            Text: "لطفا محصول شماره 5 را ویرایش کنید",
            Time: "5 ساعت قبل",
          },
        ])
      );
    }

    setTimeout(() => {
      this.FuncSetActivateMenuSidebar();
    }, 100);
  }
  ////////////////////////////////////////////////////////////////////// End Section Constructor

  ////////////////////////////////////////////////////////////////////// Start Section Functions
  FuncOpenCloseMenuSideBar = () => {
    let Sidebar = document.querySelector(".sidebar");
    let Header = document.querySelector(".header");
    let Content = document.querySelector(".content");

    if (Sidebar.style.right === "" || Sidebar.style.right === "240px") {
      Sidebar.style.right = "-240px";
      Header.style.right = "0";
      Content.style.right = "0";
    } else {
      Sidebar.style.right = "";
      Header.style.right = "";
      Content.style.right = "";
    }
  };

  FuncCloseMenuSideBar = () => {
    let Sidebar = document.querySelector(".sidebar");
    let Header = document.querySelector(".header");
    let Content = document.querySelector(".content");

    Sidebar.style.right = "-240px";
    Header.style.right = "0";
    Content.style.right = "0";
  };

  FuncActiveInActiveSidebarMenu = (Id) => {
    let MenuSidebarAll = document.querySelectorAll(
      ".section-menu-sidebar-inner"
    );
    let MenuSidebarItemsAll = document.querySelectorAll(
      ".section-menu-sidebar-items"
    );
    let IconMenuSidebarItemsAll = document.querySelectorAll(
      ".icon-menu-sidebar-items"
    );
    let MenuSidebar = document.querySelector(
      `.section-menu-sidebar-inner${Id}`
    );
    let MenuSidebarItems = document.querySelector(
      `.section-menu-sidebar-items${Id}`
    );
    let IconMenuSidebarItems = document.querySelector(
      `.icon-menu-sidebar-items${Id}`
    );

    MenuSidebarAll.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("active");
    });
    MenuSidebarItemsAll.forEach((item) => {
      item.classList.remove("active");
    });
    IconMenuSidebarItemsAll.forEach((item) => {
      item.style.transform = "";
    });

    if (
      MenuSidebar.style.display === "" ||
      MenuSidebar.style.display === "none"
    ) {
      MenuSidebar.style.display = "block";
      MenuSidebarItems.classList.add("active");
      MenuSidebar.classList.add("active");
      IconMenuSidebarItems.style.transform = "rotate(-180deg)";
      document.querySelector(".sidebar").scrollTo({
        top:
          document.querySelector(`.section-menu-sidebar-items${Id}`).parentNode
            .offsetTop - 120,
      });
    } else {
      MenuSidebar.style.display = "none";
      MenuSidebar.classList.remove("active");
      MenuSidebarItems.classList.remove("active");
      IconMenuSidebarItems.style.transform = "";
    }
  };

  FuncSetActivateMenuSidebar = () => {
    let MenuSidebarAll = document.querySelectorAll(
      ".section-menu-sidebar-inner"
    );
    let MenuSidebarItemsAll = document.querySelectorAll(
      ".section-menu-sidebar-items"
    );
    MenuSidebarAll.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("active");
    });
    MenuSidebarItemsAll.forEach((item) => {
      item.classList.remove("active");
    });

    let LengthSplit = window.location.href.split("/").length;
    let SplitedHref = window.location.href.split("/")[LengthSplit - 1];

    if (SplitedHref !== "") {
      let LinkItems = document.querySelectorAll(".link-items");
      let Link = document.querySelector(
        `.link-items[aria-label=${SplitedHref}]`
      );

      if (Link) {
        LinkItems.forEach((item) => {
          item.classList.remove("active-sub");
        });
        Link.classList.add("active-sub");

        let ListUlActive = document.querySelector(".active-sub");
        ListUlActive.parentNode.style.display = "block";
        ListUlActive.parentNode.classList.add("active");
        ListUlActive.parentNode.parentNode.firstChild.classList.add("active");
        ListUlActive.parentNode.parentNode.firstChild.lastChild.style.transform =
          "rotate(-180deg)";
        document.querySelector(".sidebar").scrollTo({
          top: ListUlActive.parentNode.parentNode.offsetTop - 120,
        });
      }
    } else {
      let LinkItems = document.querySelectorAll(".link-items");
      let Link = document.querySelector(".link-items[aria-label='']");
      LinkItems.forEach((item) => {
        item.classList.remove("active-sub");
      });
      Link.classList.add("active-sub");

      let ListUlActive = document.querySelector(".active-sub");
      ListUlActive.parentNode.style.display = "block";
      ListUlActive.parentNode.classList.add("active");
      ListUlActive.parentNode.parentNode.firstChild.classList.add("active");
      ListUlActive.parentNode.parentNode.firstChild.lastChild.style.transform =
        "rotate(-180deg)";
    }
  };

  FuncSetActiveSubMenus = (Id) => {
    setTimeout(() => {
      let LinkItemsAll = document.querySelectorAll(".link-items");
      let LinkItems = document.querySelector(`.link-item${Id}`);

      LinkItemsAll.forEach((item) => {
        item.classList.remove("active-sub");
      });
      LinkItems.classList.add("active-sub");
      this.FuncSetActivateMenuSidebar();
      this.FuncToTopPage();
    }, 100);
  };

  FuncOpenCloseSetting = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    ToDo.style.left = "";
    Profile.style.display = "";
    Notifications.style.display = "";
    Search.style.display = "";
    Language.style.display = "";
    Message.style.display = "";
    ShortCode.style.display = "";

    if (Setting.style.left === "" || Setting.style.left === "-270px") {
      Setting.style.left = "0";
    } else {
      Setting.style.left = "";
    }
  };

  FuncOpenCloseToDoList = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    Profile.style.display = "";
    Notifications.style.display = "";
    Search.style.display = "";
    Language.style.display = "";
    Message.style.display = "";
    ShortCode.style.display = "";

    if (ToDo.style.left === "" || ToDo.style.left === "-300px") {
      ToDo.style.left = "0";
    } else {
      ToDo.style.left = "";
    }
  };

  FuncOpenCloseProfile = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    ToDo.style.left = "";
    Notifications.style.display = "";
    Search.style.display = "";
    Language.style.display = "";
    Message.style.display = "";
    ShortCode.style.display = "";

    if (Profile.style.display === "" || Profile.style.display === "none") {
      Profile.style.display = "block";
    } else {
      Profile.style.display = "";
    }
  };

  FuncOpenCloseNotifications = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    ToDo.style.left = "";
    Profile.style.display = "";
    Search.style.display = "";
    Language.style.display = "";
    Message.style.display = "";
    ShortCode.style.display = "";

    if (
      Notifications.style.display === "" ||
      Notifications.style.display === "none"
    ) {
      Notifications.style.display = "block";
    } else {
      Notifications.style.display = "";
    }
  };

  FuncOpenCloseFullscreen = () => {
    if (this.state.StateIconFullScreen === true) {
      this.setState({
        IconFullScreen: <FullscreenExit titleAccess="خروج از حالت تمام صفحه" />,
        StateIconFullScreen: false,
      });
    } else {
      this.setState({
        IconFullScreen: <Fullscreen titleAccess="رفتن به حالت تمام صفحه" />,
        StateIconFullScreen: true,
      });
    }

    if (this.state.StateFullScreen === false) {
      this.setState({
        StateFullScreen: true,
      });
      document.body.requestFullscreen();
    } else if (this.state.StateFullScreen === true) {
      this.setState({
        StateFullScreen: false,
      });
      document.exitFullscreen();
    }
  };

  FuncOpenCloseSearch = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    ToDo.style.left = "";
    Profile.style.display = "";
    Notifications.style.display = "";
    Language.style.display = "";
    Message.style.display = "";
    ShortCode.style.display = "";

    if (Search.style.display === "" || Search.style.display === "none") {
      Search.style.display = "block";
    } else {
      Search.style.display = "";
    }
  };

  FuncDarkLightMode = () => {
    let Root = document.querySelector(":root");
    if (this.state.StateIconDarkLightMode === true) {
      Root.style.setProperty("--mp-theme", "#e9eef9");
      Root.style.setProperty("--mp-theme-other", "#fff");
      Root.style.setProperty("--mp-theme-other-hover", "#666cff");
      Root.style.setProperty("--mp-theme-dropdown-menu", "#f3f4f4");
      Root.style.setProperty("--mp-theme-color", "#516377");
      this.setState({
        IconDarkLightMode: <DarkMode titleAccess="تم تیره" />,
        StateIconDarkLightMode: false,
      });
    } else {
      Root.style.setProperty("--mp-theme", "#232a3b");
      Root.style.setProperty("--mp-theme-other", "#283144");
      Root.style.setProperty("--mp-theme-other-hover", "#666cff");
      Root.style.setProperty("--mp-theme-dropdown-menu", "#1c222f");
      Root.style.setProperty("--mp-theme-color", "#d8deea");
      this.setState({
        IconDarkLightMode: <LightMode titleAccess="تم روشن" />,
        StateIconDarkLightMode: true,
      });
    }
  };

  FuncLanguage = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    ToDo.style.left = "";
    Profile.style.display = "";
    Notifications.style.display = "";
    Search.style.display = "";
    Message.style.display = "";
    ShortCode.style.display = "";

    if (Language.style.display === "" || Language.style.display === "none") {
      Language.style.display = "block";
    } else {
      Language.style.display = "";
    }
  };

  FuncOpenCloseMessages = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    ToDo.style.left = "";
    Profile.style.display = "";
    Notifications.style.display = "";
    Search.style.display = "";
    Language.style.display = "";
    ShortCode.style.display = "";

    if (Message.style.display === "" || Message.style.display === "none") {
      Message.style.display = "block";
    } else {
      Message.style.display = "";
    }
  };

  FuncOpenCloseShortCode = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    ToDo.style.left = "";
    Profile.style.display = "";
    Notifications.style.display = "";
    Search.style.display = "";
    Message.style.display = "";
    Language.style.display = "";

    if (ShortCode.style.display === "" || ShortCode.style.display === "none") {
      ShortCode.style.display = "block";
    } else {
      ShortCode.style.display = "";
    }
  };

  FuncCloseAllBox = () => {
    let Setting = document.querySelector(".setting");
    let ToDo = document.querySelector(".todo");
    let Profile = document.querySelector(".profile");
    let Notifications = document.querySelector(".notification");
    let Search = document.querySelector(".search-box");
    let Language = document.querySelector(".language");
    let Message = document.querySelector(".message");
    let ShortCode = document.querySelector(".short-code");

    Setting.style.left = "";
    ToDo.style.left = "";
    Profile.style.display = "";
    Notifications.style.display = "";
    Search.style.display = "";
    Language.style.display = "";
    Message.style.display = "";
    ShortCode.style.display = "";
  };

  FuncAddItemToDoList = () => {
    let ValueToDoList = document.querySelector(".input-add-item-todo-list");
    if (ValueToDoList.value !== "") {
      let NewData = {
        Id: `${this.state.ToDoListData.length + 1}`,
        Text: ValueToDoList.value,
        Complete: false,
      };
      this.setState((previousState) => ({
        ToDoListData: [...previousState.ToDoListData, NewData],
      }));
      ValueToDoList.value = "";
      setTimeout(() => {
        sessionStorage.setItem(
          "ToDoListData",
          JSON.stringify(this.state.ToDoListData)
        );
      }, 100);
    }
  };

  FuncCheckItemToDoList = (Id) => {};

  FuncEditItemToDoList = (Id, Text) => {
    let ValueToDoList = document.querySelector(".input-add-item-todo-list");
    ValueToDoList.value = Text;

    const NewData = this.state.ToDoListData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      ToDoListData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "ToDoListData",
        JSON.stringify(this.state.ToDoListData)
      );
    }, 100);
  };

  FuncDeleteItemToDoList = (Id) => {
    const NewData = this.state.ToDoListData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      ToDoListData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "ToDoListData",
        JSON.stringify(this.state.ToDoListData)
      );
    }, 100);
  };

  FuncDeleteNotification = (Id) => {
    const NewData = this.state.NotificationsData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      NotificationsData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "NotificationsData",
        JSON.stringify(this.state.NotificationsData)
      );
    }, 100);
  };

  FuncSetActiveLanguage = () => {};

  FuncDeleteMessage = (Id) => {
    const NewData = this.state.MessageData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      MessageData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "MessageData",
        JSON.stringify(this.state.MessageData)
      );
    }, 100);
  };

  FuncAddShortCode = () => {};

  FuncToTopPage = () => {
    document.querySelector(".content").scrollTo({
      top: 0,
    });
  };

  FuncHiddenHeader = () => {
    let Header = document.querySelector(".header");
    let Content = document.querySelector(".content");
    let Setting = document.querySelector(".setting");
    if (this.state.StateHeaderPanel) {
      this.setState({
        StateHeaderPanel: false,
      });
      Header.style.top = "-120px";
      Content.style.top = "0";
      Setting.style.top = "0";
    } else {
      this.setState({
        StateHeaderPanel: true,
      });
      Header.style.top = "";
      Content.style.top = "";
      Setting.style.top = "";
    }
  };

  FuncHiddenMenu = () => {
    let Menu = document.querySelector(".sidebar");
    let Content = document.querySelector(".content");
    let Header = document.querySelector(".header");
    if (this.state.StateMenuPanel) {
      this.setState({
        StateMenuPanel: false,
      });
      Menu.style.right = "-240px";
      Content.style.right = "0";
      Header.style.right = "0";
    } else {
      this.setState({
        StateMenuPanel: true,
      });
      Menu.style.right = "";
      Content.style.right = "";
      Header.style.right = "";
    }
  };

  FuncChangeMpTheme = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(".input-color-mp-theme");
    this.setState({
      MpTheme: ValueInput.value,
    });
    Root.style.setProperty("--mp-theme", this.state.MpTheme);
    sessionStorage.setItem("MpTheme", this.state.MpTheme);
  };

  FuncChangeMpThemeOther = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(".input-color-mp-theme-other");
    this.setState({
      MpThemeOther: ValueInput.value,
    });
    Root.style.setProperty("--mp-theme-other", this.state.MpThemeOther);
    sessionStorage.setItem("MpThemeOther", this.state.MpThemeOther);
  };

  FuncChangeMpThemeDropdownMenu = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(
      ".input-color-mp-theme-dropdown-menu"
    );
    this.setState({
      MpThemeDropdownMenu: ValueInput.value,
    });
    Root.style.setProperty(
      "--mp-theme-dropdown-menu",
      this.state.MpThemeDropdownMenu
    );
    sessionStorage.setItem(
      "MpThemeDropdownMenu",
      this.state.MpThemeDropdownMenu
    );
  };

  FuncChangeMpThemeColor = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(".input-color-mp-theme-color");
    this.setState({
      MpThemeColor: ValueInput.value,
    });
    Root.style.setProperty("--mp-theme-color", this.state.MpThemeColor);
    sessionStorage.setItem("MpThemeColor", this.state.MpThemeColor);
  };

  FuncChangeMpThemeOtherHover = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(
      ".input-color-mp-theme-other-hover"
    );
    this.setState({
      MpThemeOtherHover: ValueInput.value,
    });
    Root.style.setProperty(
      "--mp-theme-other-hover",
      this.state.MpThemeOtherHover
    );
    sessionStorage.setItem("MpThemeOtherHover", this.state.MpThemeOtherHover);
  };

  FuncResetSetting = () => {
    let Root = document.querySelector(":root");
    Root.style.setProperty("--mp-theme", "#232a3b");
    Root.style.setProperty("--mp-theme-other", "#283144");
    Root.style.setProperty("--mp-theme-other-hover", "#666cff");
    Root.style.setProperty("--mp-theme-dropdown-menu", "#1c222f");
    Root.style.setProperty("--mp-theme-color", "#d8deea");

    sessionStorage.setItem("MpTheme", "#232a3b");
    sessionStorage.setItem("MpThemeOther", "#283144");
    sessionStorage.setItem("MpThemeOtherHover", "#666cff");
    sessionStorage.setItem("MpThemeDropdownMenu", "#1c222f");
    sessionStorage.setItem("MpThemeColor", "#d8deea");

    this.setState({
      MpTheme: "#232a3b",
      MpThemeOther: "#283144",
      MpThemeOtherHover: "#666cff",
      MpThemeDropdownMenu: "#1c222f",
      MpThemeColor: "#d8deea",
    });
  };
  ////////////////////////////////////////////////////////////////////// End Section Functions

  ////////////////////////////////////////////////////////////////////// Start Section Render
  render() {
    return (
      <BrowserRouter>
        <section className="app_main">
          {/* Start Section Header */}
          <header className="header row">
            <section className="col-sm-12 d-flex align-items-center justify-content-between flex-row-reverse pl-5">
              <section className="d-flex flex-row-reverse section-menu-header">
                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncOpenCloseSetting();
                  }}
                >
                  <Settings titleAccess="تنظیمات قالب میستر پنل" />
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseToDoList();
                  }}
                >
                  <FormatListBulleted titleAccess="لیست کارهای شما - Todo List" />
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseProfile();
                  }}
                >
                  <img
                    alt="Profile"
                    loading="lazy"
                    src="/Assets/Images/Profiles/Profile.png"
                    className="image-profile"
                  />
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseNotifications();
                  }}
                >
                  {this.state.NotificationsData.length !== 0 ? (
                    <span className="point-message"></span>
                  ) : (
                    ""
                  )}
                  <Notifications titleAccess="نوتیفیکیشن های شما" />
                </section>

                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncOpenCloseFullscreen();
                  }}
                >
                  {this.state.IconFullScreen}
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseSearch();
                  }}
                >
                  <Search titleAccess="جستجوی کلمه مورد نظر شما" />
                </section>

                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncDarkLightMode();
                  }}
                >
                  {this.state.IconDarkLightMode}
                </section>

                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncLanguage();
                  }}
                >
                  <Language titleAccess="زبان های قالب میستر پنل" />
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseMessages();
                  }}
                >
                  {this.state.MessageData.length !== 0 ? (
                    <span className="point-message"></span>
                  ) : (
                    ""
                  )}
                  <Message titleAccess="پیام های شما" />
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseShortCode();
                  }}
                >
                  <AppShortcut titleAccess="شورت کد های قالب میستر پنل" />
                </section>
              </section>

              <section className="align-items-center justify-content-center section-menu">
                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseMenuSideBar();
                  }}
                >
                  <Menu titleAccess="منو کناری ساید بار" />
                </section>
              </section>
            </section>
          </header>
          {/* End Section Header */}

          {/* Start Section Content */}
          <section
            className="content"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            {/* Start Section Router */}
            <Routes>
              {/* Start Route Dashboard */}
              <Route path="/" element={<DashboardAnalytics />} exact />
              <Route path="/DashboardCRM" element={<DashboardCRM />} />
              <Route
                path="/DashboardEcommerce"
                element={<DashboardEcommerce />}
              />
              {/* Start Route Dashboard */}

              {/* Start Route Users */}
              <Route path="/UsersAddNewUsers" element={<UsersAddNewUsers />} />
              <Route
                path="/UsersAllNonPaidUsers"
                element={<UsersAllNonPaidUsers />}
              />
              <Route
                path="/UsersAllPaidUsers"
                element={<UsersAllPaidUsers />}
              />
              <Route path="/UsersAllUsers" element={<UsersAllUsers />} />
              <Route
                path="/UsersAllUsersGeneral"
                element={<UsersAllUsersGeneral />}
              />
              <Route
                path="/UsersAllUsersServiceProviders"
                element={<UsersAllUsersServiceProviders />}
              />
              <Route path="/UsersFreeUsers" element={<UsersFreeUsers />} />
              <Route
                path="/UsersNewCODPaymentRequest"
                element={<UsersNewCODPaymentRequest />}
              />
              <Route
                path="/UsersNewUserRequests"
                element={<UsersNewUserRequests />}
              />
              <Route
                path="/UsersPremiumUsers"
                element={<UsersPremiumUsers />}
              />
              <Route
                path="/UsersPremiumUsersPlus"
                element={<UsersPremiumUsersPlus />}
              />
              <Route
                path="/UsersStandardUsers"
                element={<UsersStandardUsers />}
              />
              {/* Start Route Users */}

              {/* Start Route Seo Settings */}
              <Route
                path="/SeoSettingsSearchListAddNew"
                element={<SeoSettingsSearchListAddNew />}
              />
              <Route
                path="/SeoSettingsSearchListSearchList"
                element={<SeoSettingsSearchListSearchList />}
              />
              <Route
                path="/SeoSettingsSearchPositionsChangePositions"
                element={<SeoSettingsSearchPositionsChangePositions />}
              />
              <Route
                path="/SeoSettingsEBookAndDigitalPagesAddNewPage"
                element={<SeoSettingsEBookAndDigitalPagesAddNewPage />}
              />
              <Route
                path="/SeoSettingsEBookAndDigitalPagesAllPages"
                element={<SeoSettingsEBookAndDigitalPagesAllPages />}
              />
              <Route
                path="/SeoSettingsGeneralPromotionPagesAddNewPage"
                element={<SeoSettingsGeneralPromotionPagesAddNewPage />}
              />
              <Route
                path="/SeoSettingsGeneralPromotionPagesAllPages"
                element={<SeoSettingsGeneralPromotionPagesAllPages />}
              />
              <Route
                path="/SeoSettingsGoogleAnalyticsGoogleAnalyticsCode"
                element={<SeoSettingsGoogleAnalyticsGoogleAnalyticsCode />}
              />
              <Route
                path="/SeoSettingsListingCategorySeoOption"
                element={<SeoSettingsListingCategorySeoOption />}
              />
              <Route
                path="/SeoSettingsMetaTagsAllPages"
                element={<SeoSettingsMetaTagsAllPages />}
              />
              <Route
                path="/SeoSettingsMetaTagsBlogSeoOption"
                element={<SeoSettingsMetaTagsBlogSeoOption />}
              />
              <Route
                path="/SeoSettingsMetaTagsEventSeoOption"
                element={<SeoSettingsMetaTagsEventSeoOption />}
              />
              <Route
                path="/SeoSettingsMetaTagsJobSeoOption"
                element={<SeoSettingsMetaTagsJobSeoOption />}
              />
              <Route
                path="/SeoSettingsMetaTagsListingSeoOption"
                element={<SeoSettingsMetaTagsListingSeoOption />}
              />
              <Route
                path="/SeoSettingsMetaTagsProductSeoOption"
                element={<SeoSettingsMetaTagsProductSeoOption />}
              />
              <Route
                path="/SeoSettingsMetaTagsServiceExpertSeoOption"
                element={<SeoSettingsMetaTagsServiceExpertSeoOption />}
              />
              <Route
                path="/SeoSettingsSitemapXMLSitemap"
                element={<SeoSettingsSitemapXMLSitemap />}
              />
              <Route
                path="/SeoSettingsTargetListingsPromotionAddNewPage"
                element={<SeoSettingsTargetListingsPromotionAddNewPage />}
              />
              <Route
                path="/SeoSettingsTargetListingsPromotionAllPages"
                element={<SeoSettingsTargetListingsPromotionAllPages />}
              />
              {/* Start Route Seo Settings */}

              {/* Start Route Listings */}
              <Route
                path="/ListingsCityAddNewCity"
                element={<ListingsCityAddNewCity />}
              />
              <Route
                path="/ListingsCityAllCity"
                element={<ListingsCityAllCity />}
              />
              <Route
                path="/ListingsCountryAddNewCountry"
                element={<ListingsCountryAddNewCountry />}
              />
              <Route
                path="/ListingsCountryAllContry"
                element={<ListingsCountryAllContry />}
              />
              <Route
                path="/ListingsEnqueryAndGetQuoteAllEnquery"
                element={<ListingsEnqueryAndGetQuoteAllEnquery />}
              />
              <Route
                path="/ListingsEnqueryAndGetQuoteSavedEnquery"
                element={<ListingsEnqueryAndGetQuoteSavedEnquery />}
              />
              <Route
                path="/ListingsListingCategoryAddNewCategory"
                element={<ListingsListingCategoryAddNewCategory />}
              />
              <Route
                path="/ListingsListingCategoryAddNewSubCategory"
                element={<ListingsListingCategoryAddNewSubCategory />}
              />
              <Route
                path="/ListingsListingCategoryAllCategory"
                element={<ListingsListingCategoryAllCategory />}
              />
              <Route
                path="/ListingsListingCategoryAllSubCategory"
                element={<ListingsListingCategoryAllSubCategory />}
              />
              <Route
                path="/ListingsListingCategoryChangeCategoryPosition"
                element={<ListingsListingCategoryChangeCategoryPosition />}
              />
              <Route
                path="/ListingsListingFilterAllFilter"
                element={<ListingsListingFilterAllFilter />}
              />
              <Route
                path="/ListingsListingFilterFeatures"
                element={<ListingsListingFilterFeatures />}
              />
              <Route
                path="/ListingsListingPromotionAllPointsHistory"
                element={<ListingsListingPromotionAllPointsHistory />}
              />
              <Route
                path="/ListingsListingPromotionAllPromotion"
                element={<ListingsListingPromotionAllPromotion />}
              />
              <Route
                path="/ListingsListingPromotionCreateNewPromotions"
                element={<ListingsListingPromotionCreateNewPromotions />}
              />
              <Route
                path="/ListingsListingPromotionPointsSetting"
                element={<ListingsListingPromotionPointsSetting />}
              />
              <Route
                path="/ListingsListingsAddNewListings"
                element={<ListingsListingsAddNewListings />}
              />
              <Route
                path="/ListingsListingsAllClaimRequest"
                element={<ListingsListingsAllClaimRequest />}
              />
              <Route
                path="/ListingsListingsAllListings"
                element={<ListingsListingsAllListings />}
              />
              <Route
                path="/ListingsListingsCreateDuplicateListings"
                element={<ListingsListingsCreateDuplicateListings />}
              />
              <Route
                path="/ListingsListingsTrashListing"
                element={<ListingsListingsTrashListing />}
              />
              <Route
                path="/ListingsReviewsAllEnquiry"
                element={<ListingsReviewsAllEnquiry />}
              />
              <Route
                path="/ListingsReviewsSavedEnquiry"
                element={<ListingsReviewsSavedEnquiry />}
              />
              <Route
                path="/ListingsStateAddNewState"
                element={<ListingsStateAddNewState />}
              />
              <Route
                path="/ListingsStateAllState"
                element={<ListingsStateAllState />}
              />
              <Route
                path="/ListingsVillageAddNewVillage"
                element={<ListingsVillageAddNewVillage />}
              />
              <Route
                path="/ListingsVillageAllVillage"
                element={<ListingsVillageAllVillage />}
              />
              {/* Start Route Listings */}

              {/* Start Route ServiceExperts */}
              <Route
                path="/ServiceExpertsAcceptPaymentModesAddNewPaymentType"
                element={<ServiceExpertsAcceptPaymentModesAddNewPaymentType />}
              />
              <Route
                path="/ServiceExpertsAcceptPaymentModesPaymentType"
                element={<ServiceExpertsAcceptPaymentModesPaymentType />}
              />
              <Route
                path="/ServiceExpertsExpertCitiesAddNewExpertArea"
                element={<ServiceExpertsExpertCitiesAddNewExpertArea />}
              />
              <Route
                path="/ServiceExpertsExpertCitiesAddNewExpertCity"
                element={<ServiceExpertsExpertCitiesAddNewExpertCity />}
              />
              <Route
                path="/ServiceExpertsExpertCitiesAllExpertAreas"
                element={<ServiceExpertsExpertCitiesAllExpertAreas />}
              />
              <Route
                path="/ServiceExpertsExpertCitiesAllExpertCity"
                element={<ServiceExpertsExpertCitiesAllExpertCity />}
              />
              <Route
                path="/ServiceExpertsExpertsCategoryAddNewCategory"
                element={<ServiceExpertsExpertsCategoryAddNewCategory />}
              />
              <Route
                path="/ServiceExpertsExpertsCategoryAddNewSubCategory"
                element={<ServiceExpertsExpertsCategoryAddNewSubCategory />}
              />
              <Route
                path="/ServiceExpertsExpertsCategoryAllCategory"
                element={<ServiceExpertsExpertsCategoryAllCategory />}
              />
              <Route
                path="/ServiceExpertsExpertsCategoryAllSubCategory"
                element={<ServiceExpertsExpertsCategoryAllSubCategory />}
              />
              <Route
                path="/ServiceExpertsExpertsCategoryHomepageCategoryOrder"
                element={<ServiceExpertsExpertsCategoryHomepageCategoryOrder />}
              />
              <Route
                path="/ServiceExpertsServiceExpertsAddNewExpert"
                element={<ServiceExpertsServiceExpertsAddNewExpert />}
              />
              <Route
                path="/ServiceExpertsServiceExpertsAllExpertLades"
                element={<ServiceExpertsServiceExpertsAllExpertLades />}
              />
              <Route
                path="/ServiceExpertsServiceExpertsAllExperts"
                element={<ServiceExpertsServiceExpertsAllExperts />}
              />
              <Route
                path="/ServiceExpertsServiceExpertsAllGeneralLeads"
                element={<ServiceExpertsServiceExpertsAllGeneralLeads />}
              />
              <Route
                path="/ServiceExpertsServiceExpertsServiceExpertAdminInfo"
                element={<ServiceExpertsServiceExpertsServiceExpertAdminInfo />}
              />
              {/* Start Route ServiceExperts */}

              {/* Start Route Jobs */}
              <Route
                path="/JobsJobCategoryAddNewCategory"
                element={<JobsJobCategoryAddNewCategory />}
              />
              <Route
                path="/JobsJobCategoryAddNewSubCategory"
                element={<JobsJobCategoryAddNewSubCategory />}
              />
              <Route
                path="/JobsJobCategoryAllCategory"
                element={<JobsJobCategoryAllCategory />}
              />
              <Route
                path="/JobsJobCategoryAllSubCategory"
                element={<JobsJobCategoryAllSubCategory />}
              />
              <Route
                path="/JobsJobCityAddNewJobCity"
                element={<JobsJobCityAddNewJobCity />}
              />
              <Route
                path="/JobsJobCityAllJobCity"
                element={<JobsJobCityAllJobCity />}
              />
              <Route
                path="/JobsJobsAddNewJobPost"
                element={<JobsJobsAddNewJobPost />}
              />
              <Route
                path="/JobsJobsAllAppliedJobs"
                element={<JobsJobsAllAppliedJobs />}
              />
              <Route path="/JobsJobsAllJobs" element={<JobsJobsAllJobs />} />
              <Route
                path="/JobsJobsHomePagePremiumJobs"
                element={<JobsJobsHomePagePremiumJobs />}
              />
              <Route
                path="/JobsJobsJobSeekerDetails"
                element={<JobsJobsJobSeekerDetails />}
              />
              <Route
                path="/JobsJobSkillSetAddNewSkillSet"
                element={<JobsJobSkillSetAddNewSkillSet />}
              />
              <Route
                path="/JobsJobSkillSetAllSkillSet"
                element={<JobsJobSkillSetAllSkillSet />}
              />
              {/* Start Route Jobs */}

              {/* Start Route Product */}
              <Route
                path="/ProductProductAddNewProduct"
                element={<ProductProductAddNewProduct />}
              />
              <Route
                path="/ProductProductAllProduct"
                element={<ProductProductAllProduct />}
              />
              <Route
                path="/ProductProductCategoryAddNewCategory"
                element={<ProductProductCategoryAddNewCategory />}
              />
              <Route
                path="/ProductProductCategoryAddNewSubCategory"
                element={<ProductProductCategoryAddNewSubCategory />}
              />
              <Route
                path="/ProductProductCategoryAllCategory"
                element={<ProductProductCategoryAllCategory />}
              />
              <Route
                path="/ProductProductCategoryAllSubCategory"
                element={<ProductProductCategoryAllSubCategory />}
              />
              {/* Start Route Product */}

              {/* Start Route Events */}
              <Route
                path="/EventsAddNewEvents"
                element={<EventsAddNewEvents />}
              />
              <Route path="/EventsAllEvents" element={<EventsAllEvents />} />
              {/* Start Route Events */}

              {/* Start Route Blog */}
              <Route path="/BlogAddNewBlogs" element={<BlogAddNewBlogs />} />
              <Route path="/BlogAllBlogs" element={<BlogAllBlogs />} />
              <Route path="/BlogDeleteBlogs" element={<BlogDeleteBlogs />} />
              <Route path="/BlogEditBlogs" element={<BlogEditBlogs />} />
              {/* Start Route Blog */}

              {/* Start Route News */}
              <Route path="/NewsAddNewNews" element={<NewsAddNewNews />} />
              <Route path="/NewsAllNews" element={<NewsAllNews />} />
              <Route path="/NewsDeleteNews" element={<NewsDeleteNews />} />
              <Route path="/NewsEditNews" element={<NewsEditNews />} />
              {/* Start Route News */}

              {/* Start Route CouponAndDeals */}
              <Route
                path="/CouponAndDealsAddNewCoupon"
                element={<CouponAndDealsAddNewCoupon />}
              />
              <Route
                path="/CouponAndDealsAllCoupons"
                element={<CouponAndDealsAllCoupons />}
              />
              {/* Start Route CouponAndDeals */}

              {/* Start Route NewsAndMagazines */}
              <Route
                path="/NewsAndMagazinesAllNewsPostsAddNewNews"
                element={<NewsAndMagazinesAllNewsPostsAddNewNews />}
              />
              <Route
                path="/NewsAndMagazinesAllNewsPostsAllNews"
                element={<NewsAndMagazinesAllNewsPostsAllNews />}
              />
              <Route
                path="/NewsAndMagazinesCategoryAddNewCategory"
                element={<NewsAndMagazinesCategoryAddNewCategory />}
              />
              <Route
                path="/NewsAndMagazinesCategoryAllCategory"
                element={<NewsAndMagazinesCategoryAllCategory />}
              />
              <Route
                path="/NewsAndMagazinesCategoryCategoryMenuOrder"
                element={<NewsAndMagazinesCategoryCategoryMenuOrder />}
              />
              <Route
                path="/NewsAndMagazinesNewHomePageSliderPosts"
                element={<NewsAndMagazinesNewHomePageSliderPosts />}
              />
              <Route
                path="/NewsAndMagazinesNewHomePageSliderPostsMenuOrder"
                element={<NewsAndMagazinesNewHomePageSliderPostsMenuOrder />}
              />
              <Route
                path="/NewsAndMagazinesNewHomePageSocialMedia"
                element={<NewsAndMagazinesNewHomePageSocialMedia />}
              />
              <Route
                path="/NewsAndMagazinesNewHomePageTrendingPosts"
                element={<NewsAndMagazinesNewHomePageTrendingPosts />}
              />
              <Route
                path="/NewsAndMagazinesNewHomePageTrendingPostsMenuOrder"
                element={<NewsAndMagazinesNewHomePageTrendingPostsMenuOrder />}
              />
              <Route path="/NewsAndMagazines" element={<NewsAndMagazines />} />
              {/* Start Route NewsAndMagazines */}

              {/* Start Route Places */}
              <Route path="/PlacesAllPlaces" element={<PlacesAllPlaces />} />
              <Route
                path="/PlacesCategoryAllCategory"
                element={<PlacesCategoryAllCategory />}
              />
              <Route
                path="/PlacesCategoryCategoryMenuOrder"
                element={<PlacesCategoryCategoryMenuOrder />}
              />
              <Route
                path="/PlacesPlaceRequest"
                element={<PlacesPlaceRequest />}
              />
              {/* Start Route Places */}

              {/* Start Route Payment */}
              <Route
                path="/PaymentAllPayment"
                element={<PaymentAllPayment />}
              />
              <Route
                path="/PaymentInvoiceCreateNewInvoice"
                element={<PaymentInvoiceCreateNewInvoice />}
              />
              <Route
                path="/PaymentInvoiceSendInvoice"
                element={<PaymentInvoiceSendInvoice />}
              />
              <Route
                path="/PaymentInvoiceSharedInvoices"
                element={<PaymentInvoiceSharedInvoices />}
              />
              <Route
                path="/PaymentPaymentGeteway"
                element={<PaymentPaymentGeteway />}
              />
              <Route
                path="/PaymentPricingPlans"
                element={<PaymentPricingPlans />}
              />
              {/* Start Route Payment */}

              {/* Start Route Ads */}
              <Route path="/AdsAdPricing" element={<AdsAdPricing />} />
              <Route
                path="/AdsAdRequestAndEnquiry"
                element={<AdsAdRequestAndEnquiry />}
              />
              <Route path="/AdsCreateNewAds" element={<AdsCreateNewAds />} />
              <Route path="/AdsCuurentAds" element={<AdsCuurentAds />} />
              <Route path="/AdsGoogleAdSense" element={<AdsGoogleAdSense />} />
              <Route path="/AdsAddNewSlider" element={<AdsAddNewSlider />} />
              <Route
                path="/AdsAllSliderImages"
                element={<AdsAllSliderImages />}
              />
              <Route path="/AdsDeleteSlider" element={<AdsDeleteSlider />} />
              <Route path="/AdsEditSlider" element={<AdsEditSlider />} />
              {/* Start Route Ads */}

              {/* Start Route SiteSetting */}
              <Route path="/SiteSetting" element={<SettingsSiteSetting />} />
              {/* Start Route SiteSetting */}

              {/* Start Route Appearance */}
              <Route
                path="/AppearanceColorSetting"
                element={<AppearanceColorSetting />}
              />
              <Route
                path="/AppearanceFeatureEnableAndDisable"
                element={<AppearanceFeatureEnableAndDisable />}
              />
              <Route
                path="/AppearanceMediaLibrary"
                element={<AppearanceMediaLibrary />}
              />
              <Route
                path="/AppearanceWebsiteLogo"
                element={<AppearanceWebsiteLogo />}
              />
              {/* Start Route Appearance */}

              {/* Start Route Cms */}
              <Route path="/CmsAllTextChange" element={<CmsAllTextChange />} />
              <Route path="/CmsDummyImages" element={<CmsDummyImages />} />
              <Route
                path="/CmsFooterFooterCMS"
                element={<CmsFooterFooterCMS />}
              />
              <Route
                path="/CmsFooterFooterPopularTags"
                element={<CmsFooterFooterPopularTags />}
              />
              <Route
                path="/CmsHomePageChooseCategory"
                element={<CmsHomePageChooseCategory />}
              />
              <Route
                path="/CmsHomePageChooseTrendingCategory"
                element={<CmsHomePageChooseTrendingCategory />}
              />
              <Route
                path="/CmsHomePageFeatureEvents"
                element={<CmsHomePageFeatureEvents />}
              />
              <Route
                path="/CmsHomePageHomePageTemplate"
                element={<CmsHomePageHomePageTemplate />}
              />
              <Route
                path="/CmsHomePagePopularBusiness"
                element={<CmsHomePagePopularBusiness />}
              />
              <Route
                path="/CmsHomePageTopSection"
                element={<CmsHomePageTopSection />}
              />
              <Route
                path="/CmsHomePageTopServices"
                element={<CmsHomePageTopServices />}
              />
              <Route path="/CmsMailTemplates" element={<CmsMailTemplates />} />
              <Route
                path="/CmsSocialMediaShare"
                element={<CmsSocialMediaShare />}
              />
              {/* Start Route Cms */}

              {/* Start Route Others */}
              <Route path="/OthersActivity" element={<OthersActivity />} />
              <Route path="/OthersChat" element={<OthersChat />} />
              <Route
                path="/OthersFeedBacksAllFeedBacks"
                element={<OthersFeedBacksAllFeedBacks />}
              />
              <Route
                path="/OthersImportAndExportExportData"
                element={<OthersImportAndExportExportData />}
              />
              <Route
                path="/OthersImportAndExportImportData"
                element={<OthersImportAndExportImportData />}
              />
              <Route
                path="/OthersSendNotificationAllNotification"
                element={<OthersSendNotificationAllNotification />}
              />
              <Route
                path="/OthersSendNotificationCreateNewNotification"
                element={<OthersSendNotificationCreateNewNotification />}
              />
              <Route
                path="/OthersSubAdminAllSubAdmins"
                element={<OthersSubAdminAllSubAdmins />}
              />
              <Route
                path="/OthersSubAdminCreateNewSubAdmins"
                element={<OthersSubAdminCreateNewSubAdmins />}
              />
              <Route path="/OthersToDoList" element={<OthersToDoList />} />
              {/* Start Route Others */}

              {/* Start Route LogOut */}
              <Route
                path="/LogOut"
                element={
                  <LogOut
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              {/* Start Route LogOut */}

              {/* Start Route PagesAddition */}
              <Route
                path="/PagesAddition400Error"
                element={
                  <PagesAddition400Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAddition403Error"
                element={
                  <PagesAddition403Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAddition404Error"
                element={
                  <PagesAddition404Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAddition408Error"
                element={
                  <PagesAddition408Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAddition500Error"
                element={
                  <PagesAddition500Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAddition501Error"
                element={
                  <PagesAddition501Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAddition502Error"
                element={
                  <PagesAddition502Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAddition503Error"
                element={
                  <PagesAddition503Error
                    FuncSetActiveSubMenus={(Id) => {
                      this.FuncSetActiveSubMenus(Id);
                    }}
                  />
                }
              />
              <Route
                path="/PagesAdditionAccountSetting"
                element={<PagesAdditionAccountSetting />}
              />
              <Route
                path="/PagesAdditionBlank"
                element={<PagesAdditionBlank />}
              />
              <Route
                path="/PagesAdditionCalendar"
                element={<PagesAdditionCalendar />}
              />
              <Route
                path="/PagesAdditionCharts"
                element={<PagesAdditionCharts />}
              />
              <Route
                path="/PagesAdditionChat"
                element={<PagesAdditionChat />}
              />
              <Route path="/PagesAdditionFAQ" element={<PagesAdditionFAQ />} />
              <Route
                path="/PagesAdditionFileAttachments"
                element={<PagesAdditionFileAttachments />}
              />
              <Route
                path="/PagesAdditionFileDetails"
                element={<PagesAdditionFileDetails />}
              />
              <Route
                path="/PagesAdditionFileManager"
                element={<PagesAdditionFileManager />}
              />
              <Route
                path="/PagesAdditionFileManagerList"
                element={<PagesAdditionFileManagerList />}
              />
              <Route
                path="/PagesAdditionForgetPassword"
                element={<PagesAdditionForgetPassword />}
              />
              <Route
                path="/PagesAdditionGallery"
                element={<PagesAdditionGallery />}
              />
              <Route
                path="/PagesAdditionLockScreen"
                element={<PagesAdditionLockScreen />}
              />
              <Route
                path="/PagesAdditionRegister"
                element={<PagesAdditionRegister />}
              />
              <Route
                path="/PagesAdditionLogin"
                element={<PagesAdditionLogin />}
              />
              <Route
                path="/PagesAdditionResetPassword"
                element={<PagesAdditionResetPassword />}
              />
              <Route
                path="/PagesAdditionShortcut"
                element={<PagesAdditionShortcut />}
              />
              <Route
                path="/PagesAdditionSlider"
                element={<PagesAdditionSlider />}
              />
              <Route
                path="/PagesAdditionTables"
                element={<PagesAdditionTables />}
              />
              <Route
                path="/PagesAdditionTerms"
                element={<PagesAdditionTerms />}
              />
              {/* End Route PagesAddition */}

              {/* Start Route Widgets */}
              <Route path="/WidgetsButtons" element={<WidgetsButtons />} />
              <Route path="/WidgetsColors" element={<WidgetsColors />} />
              <Route path="/WidgetsIcons" element={<WidgetsIcons />} />
              <Route path="/WidgetsWidget" element={<WidgetsWidget />} />
              {/* End Route Widgets */}

              <Route path="*" element={<PagesAddition404Error />}></Route>
            </Routes>
            {/* End Section Router */}
          </section>
          {/* End Section Content */}

          {/* Start Section Side Bar */}
          <section
            className="sidebar"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <section className="d-flex align-items-center justify-content-around section-header-navigation">
              <Link
                to="/"
                onClick={() => {
                  this.FuncSetActiveSubMenus("1");
                }}
              >
                <img
                  alt="Logo"
                  loading="lazy"
                  src="/Assets/Images/Logo.png"
                  className="image-logo-sidebar"
                />
              </Link>

              <section
                className="icon-box rotation section-icon-minimize-menu"
                onClick={() => {
                  this.FuncCloseMenuSideBar();
                }}
              >
                <ArrowForward titleAccess="کوچک کردن منو" />
              </section>
            </section>

            <ul className="section-menu-sidebar">
              <li className="category-section-menu-sidebar">پروفایل</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items1"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("1");
                  }}
                >
                  <section>
                    <Dashboard />

                    <span>پروفایل</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items1" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner1">
                  <li
                    className="link-items link-item1 active-sub"
                    aria-label=""
                    onClick={() => {
                      this.FuncSetActiveSubMenus("1");
                    }}
                  >
                    <Link to="/">
                      <Analytics />
                      <span>تجزیه و تحلیل</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item2"
                    aria-label="DashboardCRM"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("2");
                    }}
                  >
                    <Link to="/DashboardCRM">
                      <SupportAgent />
                      <span>مدیریت ارتباط با مشتری</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item3"
                    aria-label="DashboardEcommerce"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("3");
                    }}
                  >
                    <Link to="/DashboardEcommerce">
                      <ShoppingCart />
                      <span>تجارت الکترونیک</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">کاربران</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items2"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("2");
                  }}
                >
                  <section>
                    <Person />

                    <span>کاربران</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items2" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner2">
                  <li
                    className="link-items link-item4"
                    aria-label="UsersAddNewUsers"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("4");
                    }}
                  >
                    <Link to="/UsersAddNewUsers">
                      <PersonAddAltOutlined />
                      <span>افزودن کاربران جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item5"
                    aria-label="UsersAllNonPaidUsers"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("5");
                    }}
                  >
                    <Link to="/UsersAllNonPaidUsers">
                      <Group />
                      <span>همه کاربران غیر پریمیوم</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item6"
                    aria-label="UsersAllPaidUsers"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("6");
                    }}
                  >
                    <Link to="/UsersAllPaidUsers">
                      <Group />
                      <span>همه کاربران پریمیوم</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item7"
                    aria-label="UsersAllUsers"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("7");
                    }}
                  >
                    <Link to="/UsersAllUsers">
                      <Group />
                      <span>تمام کاربران</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item8"
                    aria-label="UsersAllUsersGeneral"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("8");
                    }}
                  >
                    <Link to="/UsersAllUsersGeneral">
                      <Group />
                      <span>همه کاربران عمومی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item9"
                    aria-label="UsersAllUsersServiceProviders"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("9");
                    }}
                  >
                    <Link to="/UsersAllUsersServiceProviders">
                      <Group />
                      <span>همه ارائه دهندگان خدمات کاربران</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item10"
                    aria-label="UsersFreeUsers"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("10");
                    }}
                  >
                    <Link to="/UsersFreeUsers">
                      <Group />
                      <span>کاربران رایگان</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item11"
                    aria-label="UsersNewCODPaymentRequest"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("11");
                    }}
                  >
                    <Link to="/UsersNewCODPaymentRequest">
                      <Payments />
                      <span>درخواست پرداخت COD جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item12"
                    aria-label="UsersNewUserRequests"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("12");
                    }}
                  >
                    <Link to="/UsersNewUserRequests">
                      <RequestPage />
                      <span>درخواست های جدید کاربران</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item13"
                    aria-label="UsersPremiumUsers"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("13");
                    }}
                  >
                    <Link to="/UsersPremiumUsers">
                      <SupervisedUserCircleOutlined />
                      <span>کاربران پریمیوم</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item14"
                    aria-label="UsersPremiumUsersPlus"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("14");
                    }}
                  >
                    <Link to="/UsersPremiumUsersPlus">
                      <SupervisedUserCircleOutlined />
                      <span>کاربران پریمیوم پلاس</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item15"
                    aria-label="UsersStandardUsers"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("15");
                    }}
                  >
                    <Link to="/UsersStandardUsers">
                      <AccessibilityOutlined />
                      <span>کاربران استاندارد</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">سئو</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items3"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("3");
                  }}
                >
                  <section>
                    <Analytics />

                    <span>سئو</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items3" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner3">
                  <li
                    className="link-items link-item16"
                    aria-label="SeoSettingsSearchListAddNew"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("16");
                    }}
                  >
                    <Link to="/SeoSettingsSearchListAddNew">
                      <AddCircleOutlineOutlined />
                      <span>افزودن فهرست جستجو جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item17"
                    aria-label="SeoSettingsSearchListSearchList"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("17");
                    }}
                  >
                    <Link to="/SeoSettingsSearchListSearchList">
                      <AddCircleOutlined />
                      <span>لیست جستجو</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item18"
                    aria-label="SeoSettingsSearchPositionsChangePositions"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("18");
                    }}
                  >
                    <Link to="/SeoSettingsSearchPositionsChangePositions">
                      <PlaceOutlined />
                      <span>تغییر موقعیت ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item19"
                    aria-label="SeoSettingsEBookAndDigitalPagesAddNewPage"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("19");
                    }}
                  >
                    <Link to="/SeoSettingsEBookAndDigitalPagesAddNewPage">
                      <MenuBookOutlined />
                      <span>
                        افزودن صفحه جدید کتاب الکترونیکی و صفحات دیجیتال
                      </span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item20"
                    aria-label="SeoSettingsEBookAndDigitalPagesAllPages"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("20");
                    }}
                  >
                    <Link to="/SeoSettingsEBookAndDigitalPagesAllPages">
                      <MenuBookOutlined />
                      <span>همه صفحات کتاب الکترونیکی و صفحات دیجیتال</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item21"
                    aria-label="SeoSettingsGeneralPromotionPagesAddNewPage"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("21");
                    }}
                  >
                    <Link to="/SeoSettingsGeneralPromotionPagesAddNewPage">
                      <ContactPageOutlined />
                      <span>افزودن صفحه جدید صفحات تبلیغاتی عمومی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item22"
                    aria-label="SeoSettingsGeneralPromotionPagesAllPages"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("22");
                    }}
                  >
                    <Link to="/SeoSettingsGeneralPromotionPagesAllPages">
                      <ContactPageOutlined />
                      <span>همه صفحات تبلیغات عمومی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item23"
                    aria-label="SeoSettingsGoogleAnalyticsGoogleAnalyticsCode"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("23");
                    }}
                  >
                    <Link to="/SeoSettingsGoogleAnalyticsGoogleAnalyticsCode">
                      <DataUsageOutlined />
                      <span>تنظیمات Google Analytics</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item24"
                    aria-label="SeoSettingsListingCategorySeoOption"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("24");
                    }}
                  >
                    <Link to="/SeoSettingsListingCategorySeoOption">
                      <FeaturedPlayListOutlined />
                      <span>دسته بندی لیست گزینه جستجوگرها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item25"
                    aria-label="SeoSettingsMetaTagsAllPages"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("25");
                    }}
                  >
                    <Link to="/SeoSettingsMetaTagsAllPages">
                      <CodeOutlined />
                      <span>تنظیمات متا تگ همه صفحات</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item26"
                    aria-label="SeoSettingsMetaTagsBlogSeoOption"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("26");
                    }}
                  >
                    <Link to="/SeoSettingsMetaTagsBlogSeoOption">
                      <TagOutlined />
                      <span>متا تگ ها گزینه سئوی وبلاگ</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item27"
                    aria-label="SeoSettingsMetaTagsEventSeoOption"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("27");
                    }}
                  >
                    <Link to="/SeoSettingsMetaTagsEventSeoOption">
                      <EventSeatOutlined />
                      <span>گزینه سئوی متا تگ ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item28"
                    aria-label="SeoSettingsMetaTagsJobSeoOption"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("28");
                    }}
                  >
                    <Link to="/SeoSettingsMetaTagsJobSeoOption">
                      <WorkOutlined />
                      <span>تنظیمات متا تگ ها بخش شغل ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item29"
                    aria-label="SeoSettingsMetaTagsListingSeoOption"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("29");
                    }}
                  >
                    <Link to="/SeoSettingsMetaTagsListingSeoOption">
                      <CodeOutlined />
                      <span>تنظیمات متا تگ لیست گزینه SEO</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item30"
                    aria-label="SeoSettingsMetaTagsProductSeoOption"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("30");
                    }}
                  >
                    <Link to="/SeoSettingsMetaTagsProductSeoOption">
                      <ProductionQuantityLimitsOutlined />
                      <span>تنظیمات متا تگ ها گزینه سئوی محصول</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item31"
                    aria-label="SeoSettingsMetaTagsServiceExpertSeoOption"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("31");
                    }}
                  >
                    <Link to="/SeoSettingsMetaTagsServiceExpertSeoOption">
                      <SettingsApplicationsOutlined />
                      <span>تنظیمات متا تگ کارشناس خدمات</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item32"
                    aria-label="SeoSettingsSitemapXMLSitemap"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("32");
                    }}
                  >
                    <Link to="/SeoSettingsSitemapXMLSitemap">
                      <SettingsApplicationsOutlined />
                      <span>تنظیمات نقشه سایت</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item33"
                    aria-label="SeoSettingsTargetListingsPromotionAddNewPage"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("33");
                    }}
                  >
                    <Link to="/SeoSettingsTargetListingsPromotionAddNewPage">
                      <FilterListOutlined />
                      <span>افزودن صفحه جدید تنظیمات ارتقاء</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item34"
                    aria-label="SeoSettingsTargetListingsPromotionAllPages"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("34");
                    }}
                  >
                    <Link to="/SeoSettingsTargetListingsPromotionAllPages">
                      <FilterListOutlined />
                      <span>همه صفحات تنظیمات ارتقاء</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">لیست ها</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items4"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("4");
                  }}
                >
                  <section>
                    <ListAlt />

                    <span>لیست ها</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items4" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner4">
                  <li
                    className="link-items link-item35"
                    aria-label="ListingsCityAddNewCity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("35");
                    }}
                  >
                    <Link to="/ListingsCityAddNewCity">
                      <LocationCityOutlined />
                      <span>اضافه کردن شهر جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item36"
                    aria-label="ListingsCityAllCity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("36");
                    }}
                  >
                    <Link to="/ListingsCityAllCity">
                      <LocationCityOutlined />
                      <span>همه شهر ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item37"
                    aria-label="ListingsCountryAddNewCountry"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("37");
                    }}
                  >
                    <Link to="/ListingsCountryAddNewCountry">
                      <LanguageOutlined />
                      <span>اضافه کردن کشور جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item38"
                    aria-label="ListingsCountryAllContry"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("38");
                    }}
                  >
                    <Link to="/ListingsCountryAllContry">
                      <LanguageOutlined />
                      <span>همه کشور ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item39"
                    aria-label="ListingsEnqueryAndGetQuoteAllEnquery"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("39");
                    }}
                  >
                    <Link to="/ListingsEnqueryAndGetQuoteAllEnquery">
                      <PriceCheckOutlined />
                      <span>جزئیات پرس و جو</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item40"
                    aria-label="ListingsEnqueryAndGetQuoteSavedEnquery"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("40");
                    }}
                  >
                    <Link to="/ListingsEnqueryAndGetQuoteSavedEnquery">
                      <FormatQuoteOutlined />
                      <span>جزئیات پرس و جو ذخیره شده</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item41"
                    aria-label="ListingsListingCategoryAddNewCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("41");
                    }}
                  >
                    <Link to="/ListingsListingCategoryAddNewCategory">
                      <ClassOutlined />
                      <span>اضافه کردن دسته جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item42"
                    aria-label="ListingsListingCategoryAddNewSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("42");
                    }}
                  >
                    <Link to="/ListingsListingCategoryAddNewSubCategory">
                      <ClassOutlined />
                      <span>اضافه کردن زیر دسته بندی جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item43"
                    aria-label="ListingsListingCategoryAllCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("43");
                    }}
                  >
                    <Link to="/ListingsListingCategoryAllCategory">
                      <ClassOutlined />
                      <span>دسته بندی همه دسته ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item44"
                    aria-label="ListingsListingCategoryAllSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("44");
                    }}
                  >
                    <Link to="/ListingsListingCategoryAllSubCategory">
                      <ClassOutlined />
                      <span>دسته بندی همه زیر دسته بندی ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item45"
                    aria-label="ListingsListingCategoryChangeCategoryPosition"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("45");
                    }}
                  >
                    <Link to="/ListingsListingCategoryChangeCategoryPosition">
                      <PlaceOutlined />
                      <span>تغییر موقعیت دسته</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item46"
                    aria-label="ListingsListingFilterAllFilter"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("46");
                    }}
                  >
                    <Link to="/ListingsListingFilterAllFilter">
                      <FilterListOutlined />
                      <span>فیلتر همه</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item47"
                    aria-label="ListingsListingFilterFeatures"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("47");
                    }}
                  >
                    <Link to="/ListingsListingFilterFeatures">
                      <FilterListOutlined />
                      <span>ویژگی های فیلتر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item48"
                    aria-label="ListingsListingPromotionAllPointsHistory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("48");
                    }}
                  >
                    <Link to="/ListingsListingPromotionAllPointsHistory">
                      <UpgradeOutlined />
                      <span>تاریخچه همه امتیازها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item49"
                    aria-label="ListingsListingPromotionAllPromotion"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("49");
                    }}
                  >
                    <Link to="/ListingsListingPromotionAllPromotion">
                      <MediationOutlined />
                      <span>همه تبلیغات</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item50"
                    aria-label="ListingsListingPromotionCreateNewPromotions"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("50");
                    }}
                  >
                    <Link to="/ListingsListingPromotionCreateNewPromotions">
                      <MediationOutlined />
                      <span>ایجاد تبلیغات جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item51"
                    aria-label="ListingsListingPromotionPointsSetting"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("51");
                    }}
                  >
                    <Link to="/ListingsListingPromotionPointsSetting">
                      <ControlPointOutlined />
                      <span>تنظیم امتیازهای تبلیغاتی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item52"
                    aria-label="ListingsListingsAddNewListings"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("52");
                    }}
                  >
                    <Link to="/ListingsListingsAddNewListings">
                      <ControlPointOutlined />
                      <span>افزودن لیست های جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item53"
                    aria-label="ListingsListingsAllClaimRequest"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("53");
                    }}
                  >
                    <Link to="/ListingsListingsAllClaimRequest">
                      <RequestQuoteOutlined />
                      <span>لیست همه درخواست ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item54"
                    aria-label="ListingsListingsAllListings"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("54");
                    }}
                  >
                    <Link to="/ListingsListingsAllListings">
                      <RequestQuoteOutlined />
                      <span>همه لیست ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item55"
                    aria-label="ListingsListingsCreateDuplicateListings"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("55");
                    }}
                  >
                    <Link to="/ListingsListingsCreateDuplicateListings">
                      <RequestQuoteOutlined />
                      <span>ایجاد لیست های تکراری</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item56"
                    aria-label="ListingsListingsTrashListing"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("56");
                    }}
                  >
                    <Link to="/ListingsListingsTrashListing">
                      <DeleteOutlineOutlined />
                      <span>فهرست سطل زباله</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item57"
                    aria-label="ListingsReviewsAllEnquiry"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("57");
                    }}
                  >
                    <Link to="/ListingsReviewsAllEnquiry">
                      <YoutubeSearchedForOutlined />
                      <span>بررسی همه لیست ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item58"
                    aria-label="ListingsReviewsSavedEnquiry"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("58");
                    }}
                  >
                    <Link to="/ListingsReviewsSavedEnquiry">
                      <YoutubeSearchedForOutlined />
                      <span>بررسی همه لیست های ذخیره شده</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item59"
                    aria-label="ListingsStateAddNewState"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("59");
                    }}
                  >
                    <Link to="/ListingsStateAddNewState">
                      <GiteOutlined />
                      <span>اضافه کردن ایالت جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item60"
                    aria-label="ListingsStateAllState"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("60");
                    }}
                  >
                    <Link to="/ListingsStateAllState">
                      <GiteOutlined />
                      <span>همه ایالت ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item61"
                    aria-label="ListingsVillageAddNewVillage"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("61");
                    }}
                  >
                    <Link to="/ListingsVillageAddNewVillage">
                      <HouseOutlined />
                      <span>اضافه کردن روستای جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item62"
                    aria-label="ListingsVillageAllVillage"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("62");
                    }}
                  >
                    <Link to="/ListingsVillageAllVillage">
                      <HouseOutlined />
                      <span>همه روستا ها</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">کارشناسان خدمات</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items5"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("5");
                  }}
                >
                  <section>
                    <MiscellaneousServicesOutlined />

                    <span>کارشناسان خدمات</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items5" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner5">
                  <li
                    className="link-items link-item63"
                    aria-label="ServiceExpertsAcceptPaymentModesAddNewPaymentType"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("63");
                    }}
                  >
                    <Link to="/ServiceExpertsAcceptPaymentModesAddNewPaymentType">
                      <MedicalServices />
                      <span>اضافه کردن نوع پرداخت جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item64"
                    aria-label="ServiceExpertsAcceptPaymentModesPaymentType"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("64");
                    }}
                  >
                    <Link to="/ServiceExpertsAcceptPaymentModesPaymentType">
                      <MedicalServices />
                      <span>نوع های پرداخت را بپذیرید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item65"
                    aria-label="ServiceExpertsExpertCitiesAddNewExpertArea"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("65");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertCitiesAddNewExpertArea">
                      <MedicalServices />
                      <span>اضافه کردن تخصص جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item66"
                    aria-label="ServiceExpertsExpertCitiesAddNewExpertCity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("66");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertCitiesAddNewExpertCity">
                      <MedicalServices />
                      <span>اضافه کردن کارشناس جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item67"
                    aria-label="ServiceExpertsExpertCitiesAllExpertAreas"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("67");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertCitiesAllExpertAreas">
                      <MedicalServices />
                      <span>همه حوزه های کارشناسی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item68"
                    aria-label="ServiceExpertsExpertCitiesAllExpertCity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("68");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertCitiesAllExpertCity">
                      <MedicalServices />
                      <span>همه کارشناس ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item69"
                    aria-label="ServiceExpertsExpertsCategoryAddNewCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("69");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertsCategoryAddNewCategory">
                      <MedicalServices />
                      <span>افزودن دسته بندی کارشناس جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item70"
                    aria-label="ServiceExpertsExpertsCategoryAddNewSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("70");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertsCategoryAddNewSubCategory">
                      <MedicalServices />
                      <span>اضافه کردن زیر دسته بندی کارشناس</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item71"
                    aria-label="ServiceExpertsExpertsCategoryAllCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("71");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertsCategoryAllCategory">
                      <MedicalServices />
                      <span>دسته بندی همه کارشناسان</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item72"
                    aria-label="ServiceExpertsExpertsCategoryAllSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("72");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertsCategoryAllSubCategory">
                      <MedicalServices />
                      <span>زیر دسته بندی همه کارشناسان</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item73"
                    aria-label="ServiceExpertsExpertsCategoryHomepageCategoryOrder"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("73");
                    }}
                  >
                    <Link to="/ServiceExpertsExpertsCategoryHomepageCategoryOrder">
                      <MedicalServices />
                      <span>دسته بندی صفحه اصلی کارشناسان</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item74"
                    aria-label="ServiceExpertsServiceExpertsAddNewExpert"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("74");
                    }}
                  >
                    <Link to="/ServiceExpertsServiceExpertsAddNewExpert">
                      <MedicalServices />
                      <span>اضافه کردن کارشناس جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item75"
                    aria-label="ServiceExpertsServiceExpertsAllExpertLades"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("75");
                    }}
                  >
                    <Link to="/ServiceExpertsServiceExpertsAllExpertLades">
                      <MedicalServices />
                      <span>کارشناسان خدمات همه مدیران</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item76"
                    aria-label="ServiceExpertsServiceExpertsAllExperts"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("76");
                    }}
                  >
                    <Link to="/ServiceExpertsServiceExpertsAllExperts">
                      <MedicalServices />
                      <span>کارشناسان خدمات همه تخصص ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item77"
                    aria-label="ServiceExpertsServiceExpertsAllGeneralLeads"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("77");
                    }}
                  >
                    <Link to="/ServiceExpertsServiceExpertsAllGeneralLeads">
                      <MedicalServices />
                      <span>کارشناسان خدمات همه مدیران عمومی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item78"
                    aria-label="ServiceExpertsServiceExpertsServiceExpertAdminInfo"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("78");
                    }}
                  >
                    <Link to="/ServiceExpertsServiceExpertsServiceExpertAdminInfo">
                      <MedicalServices />
                      <span>اطلاعات مدیریتی کارشناس ها</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">شغل ها</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items6"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("6");
                  }}
                >
                  <section>
                    <Work />

                    <span>شغل ها</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items6" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner6">
                  <li
                    className="link-items link-item79"
                    aria-label="JobsJobCategoryAddNewCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("79");
                    }}
                  >
                    <Link to="/JobsJobCategoryAddNewCategory">
                      <AddBoxOutlined />
                      <span>اضافه کردن دسته بندی جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item80"
                    aria-label="JobsJobCategoryAddNewSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("80");
                    }}
                  >
                    <Link to="/JobsJobCategoryAddNewSubCategory">
                      <AddBoxOutlined />
                      <span>اضافه کردن زیر دسته بندی جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item81"
                    aria-label="JobsJobCategoryAllCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("81");
                    }}
                  >
                    <Link to="/JobsJobCategoryAllCategory">
                      <AllInclusiveOutlined />
                      <span>همه دسته ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item82"
                    aria-label="JobsJobCategoryAllSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("82");
                    }}
                  >
                    <Link to="/JobsJobCategoryAllSubCategory">
                      <AllInclusiveOutlined />
                      <span>دسته بندی همه زیر دسته بندی ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item83"
                    aria-label="JobsJobCityAddNewJobCity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("83");
                    }}
                  >
                    <Link to="/JobsJobCityAddNewJobCity">
                      <AddBoxOutlined />
                      <span>اضافه کردن کار در شهر جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item84"
                    aria-label="JobsJobCityAllJobCity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("84");
                    }}
                  >
                    <Link to="/JobsJobCityAllJobCity">
                      <AllInclusiveOutlined />
                      <span>همه شغل های شهر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item85"
                    aria-label="JobsJobsAddNewJobPost"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("85");
                    }}
                  >
                    <Link to="/JobsJobsAddNewJobPost">
                      <AddBoxOutlined />
                      <span>افزودن پست شغلی جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item86"
                    aria-label="JobsJobsAllAppliedJobs"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("86");
                    }}
                  >
                    <Link to="/JobsJobsAllAppliedJobs">
                      <AllInclusiveOutlined />
                      <span>همه پست های شغلی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item87"
                    aria-label="JobsJobsAllJobs"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("87");
                    }}
                  >
                    <Link to="/JobsJobsAllJobs">
                      <WorkOutlineOutlined />
                      <span>همه شغل ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item88"
                    aria-label="JobsJobsHomePagePremiumJobs"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("88");
                    }}
                  >
                    <Link to="/JobsJobsHomePagePremiumJobs">
                      <WorkOutlineOutlined />
                      <span>مشاغل حق بیمه صفحه اصلی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item89"
                    aria-label="JobsJobsJobSeekerDetails"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("89");
                    }}
                  >
                    <Link to="/JobsJobsJobSeekerDetails">
                      <PersonPinCircleOutlined />
                      <span>جزئیات افراد جویای کار</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item90"
                    aria-label="JobsJobSkillSetAddNewSkillSet"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("90");
                    }}
                  >
                    <Link to="/JobsJobSkillSetAddNewSkillSet">
                      <AddCircleOutlineOutlined />
                      <span>اضافه کردن مهارت های جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item91"
                    aria-label="JobsJobSkillSetAllSkillSet"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("91");
                    }}
                  >
                    <Link to="/JobsJobSkillSetAllSkillSet">
                      <AddCircleOutlineOutlined />
                      <span>تنظیم تمام مهارت</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">محصولات</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items7"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("7");
                  }}
                >
                  <section>
                    <ProductionQuantityLimits />

                    <span>محصولات</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items7" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner7">
                  <li
                    className="link-items link-item92"
                    aria-label="ProductProductAddNewProduct"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("92");
                    }}
                  >
                    <Link to="/ProductProductAddNewProduct">
                      <Add />
                      <span>افزودن محصول جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item93"
                    aria-label="ProductProductAllProduct"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("93");
                    }}
                  >
                    <Link to="/ProductProductAllProduct">
                      <Inventory2 />
                      <span>همه محصولات</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item94"
                    aria-label="ProductProductCategoryAddNewCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("94");
                    }}
                  >
                    <Link to="/ProductProductCategoryAddNewCategory">
                      <Add />
                      <span>اضافه کردن دسته جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item95"
                    aria-label="ProductProductCategoryAddNewSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("95");
                    }}
                  >
                    <Link to="/ProductProductCategoryAddNewSubCategory">
                      <Add />
                      <span>اضافه کردن زیر مجموعه جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item96"
                    aria-label="ProductProductCategoryAllCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("96");
                    }}
                  >
                    <Link to="/ProductProductCategoryAllCategory">
                      <Inventory2 />
                      <span>همه دسته بندی ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item97"
                    aria-label="ProductProductCategoryAllSubCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("97");
                    }}
                  >
                    <Link to="/ProductProductCategoryAllSubCategory">
                      <Inventory2 />
                      <span>همه زیر دسته بندی ها</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">مناسبت ها</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items8"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("8");
                  }}
                >
                  <section>
                    <Event />

                    <span>مناسبت ها</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items8" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner8">
                  <li
                    className="link-items link-item98"
                    aria-label="EventsAddNewEvents"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("98");
                    }}
                  >
                    <Link to="/EventsAddNewEvents">
                      <Add />
                      <span>اضافه کردن مناسبت جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item99"
                    aria-label="EventsAllEvents"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("99");
                    }}
                  >
                    <Link to="/EventsAllEvents">
                      <Event />
                      <span>همه مناسبت ها</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">وبلاگ</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items9"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("9");
                  }}
                >
                  <section>
                    <Edit />

                    <span>وبلاگ</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items9" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner9">
                  <li
                    className="link-items link-item100"
                    aria-label="BlogAddNewBlogs"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("100");
                    }}
                  >
                    <Link to="/BlogAddNewBlogs">
                      <Add />
                      <span>اضافه کردن پست جدید</span>
                    </Link>
                  </li>
                  <li
                    className="link-items link-item101"
                    aria-label="BlogAllBlogs"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("101");
                    }}
                  >
                    <Link to="/BlogAllBlogs">
                      <AllOut />
                      <span>همه پست ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item102"
                    aria-label="BlogDeleteBlogs"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("102");
                    }}
                  >
                    <Link to="/BlogDeleteBlogs">
                      <AllOut />
                      <span>حذف پست ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item103"
                    aria-label="BlogEditBlogs"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("103");
                    }}
                  >
                    <Link to="/BlogEditBlogs">
                      <Edit />
                      <span>ویرایش پست ها</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">اخبار</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items10"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("10");
                  }}
                >
                  <section>
                    <Edit />

                    <span>اخبار</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items10" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner10">
                  <li
                    className="link-items link-item104"
                    aria-label="NewsAddNewNews"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("104");
                    }}
                  >
                    <Link to="/NewsAddNewNews">
                      <Add />
                      <span>اضافه کردن خبر جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item105"
                    aria-label="NewsAllNews"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("105");
                    }}
                  >
                    <Link to="/NewsAllNews">
                      <AllOut />
                      <span>همه اخبار</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item106"
                    aria-label="NewsDeleteNews"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("106");
                    }}
                  >
                    <Link to="/NewsDeleteNews">
                      <AllOut />
                      <span>حذف اخبار</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item107"
                    aria-label="NewsEditNews"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("107");
                    }}
                  >
                    <Link to="/NewsEditNews">
                      <Edit />
                      <span>ویرایش اخبار</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">کوپن و معاملات</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items11"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("11");
                  }}
                >
                  <section>
                    <Discount />

                    <span>کوپن و معاملات</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items11" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner11">
                  <li
                    className="link-items link-item108"
                    aria-label="CouponAndDealsAddNewCoupon"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("108");
                    }}
                  >
                    <Link to="/CouponAndDealsAddNewCoupon">
                      <Add />
                      <span>اضافه کردن کوپن و معامله جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item109"
                    aria-label="CouponAndDealsAllCoupons"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("109");
                    }}
                  >
                    <Link to="/CouponAndDealsAllCoupons">
                      <AllOut />
                      <span>همه کوپن ها و معاملات</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">اخبار و مجلات</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items12"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("12");
                  }}
                >
                  <section>
                    <Newspaper />

                    <span>اخبار و مجلات</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items12" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner12">
                  <li
                    className="link-items link-item110"
                    aria-label="NewsAndMagazinesAllNewsPostsAddNewNews"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("110");
                    }}
                  >
                    <Link to="/NewsAndMagazinesAllNewsPostsAddNewNews">
                      <PostAdd />
                      <span>اضافه کردن خبر و مجله جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item111"
                    aria-label="NewsAndMagazinesAllNewsPostsAllNews"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("111");
                    }}
                  >
                    <Link to="/NewsAndMagazinesAllNewsPostsAllNews">
                      <AllOut />
                      <span>همه اخبار و پست ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item112"
                    aria-label="NewsAndMagazinesCategoryAddNewCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("112");
                    }}
                  >
                    <Link to="/NewsAndMagazinesCategoryAddNewCategory">
                      <PostAdd />
                      <span>اضافه کردن دسته بندی جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item113"
                    aria-label="NewsAndMagazinesCategoryAllCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("113");
                    }}
                  >
                    <Link to="/NewsAndMagazinesCategoryAllCategory">
                      <AllOut />
                      <span>همه دسته بندی ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item114"
                    aria-label="NewsAndMagazinesCategoryCategoryMenuOrder"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("114");
                    }}
                  >
                    <Link to="/NewsAndMagazinesCategoryCategoryMenuOrder">
                      <AllOut />
                      <span>ترتیب منوی دسته</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item115"
                    aria-label="NewsAndMagazinesNewHomePageSliderPosts"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("115");
                    }}
                  >
                    <Link to="/NewsAndMagazinesNewHomePageSliderPosts">
                      <PostAdd />
                      <span>پست های اسلایدر صفحه</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item116"
                    aria-label="NewsAndMagazinesNewHomePageSliderPostsMenuOrder"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("116");
                    }}
                  >
                    <Link to="/NewsAndMagazinesNewHomePageSliderPostsMenuOrder">
                      <Newspaper />
                      <span>ترتیب منوی پست های اسلایدر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item117"
                    aria-label="NewsAndMagazinesNewHomePageSocialMedia"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("117");
                    }}
                  >
                    <Link to="/NewsAndMagazinesNewHomePageSocialMedia">
                      <Newspaper />
                      <span>صفحه اصلی جدید رسانه های اجتماعی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item118"
                    aria-label="NewsAndMagazinesNewHomePageTrendingPosts"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("118");
                    }}
                  >
                    <Link to="/NewsAndMagazinesNewHomePageTrendingPosts">
                      <Newspaper />
                      <span>پست های پرطرفدار</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item119"
                    aria-label="NewsAndMagazinesNewHomePageTrendingPostsMenuOrder"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("119");
                    }}
                  >
                    <Link to="/NewsAndMagazinesNewHomePageTrendingPostsMenuOrder">
                      <Newspaper />
                      <span>ترتیب منوی پست های پرطرفدار</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item120"
                    aria-label="NewsAndMagazines"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("120");
                    }}
                  >
                    <Link to="/NewsAndMagazines">
                      <Newspaper />
                      <span>اخبار و مجلات</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">مکان ها</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items13"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("13");
                  }}
                >
                  <section>
                    <Place />

                    <span>مکان ها</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items13" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner13">
                  <li
                    className="link-items link-item121"
                    aria-label="PlacesAllPlaces"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("121");
                    }}
                  >
                    <Link to="/PlacesAllPlaces">
                      <LocationSearching />
                      <span>همه مکان ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item122"
                    aria-label="PlacesCategoryAllCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("122");
                    }}
                  >
                    <Link to="/PlacesCategoryAllCategory">
                      <LocationSearching />
                      <span>دسته بندی همه مکان ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item123"
                    aria-label="PlacesCategoryCategoryMenuOrder"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("123");
                    }}
                  >
                    <Link to="/PlacesCategoryCategoryMenuOrder">
                      <PushPin />
                      <span>ترتیب منوی دسته مکان ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item124"
                    aria-label="PlacesPlaceRequest"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("124");
                    }}
                  >
                    <Link to="/PlacesPlaceRequest">
                      <LocationSearching />
                      <span>درخواست مکان</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">پرداخت</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items14"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("14");
                  }}
                >
                  <section>
                    <Payment />

                    <span>پرداخت</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items14" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner14">
                  <li
                    className="link-items link-item125"
                    aria-label="PaymentAllPayment"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("125");
                    }}
                  >
                    <Link to="/PaymentAllPayment">
                      <Payments />
                      <span>همه پرداخت ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item126"
                    aria-label="PaymentInvoiceCreateNewInvoice"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("126");
                    }}
                  >
                    <Link to="/PaymentInvoiceCreateNewInvoice">
                      <AddCard />
                      <span>ایجاد فاکتور جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item127"
                    aria-label="PaymentInvoiceSendInvoice"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("127");
                    }}
                  >
                    <Link to="/PaymentInvoiceSendInvoice">
                      <AddBusiness />
                      <span>ارسال فاکتور</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item128"
                    aria-label="PaymentInvoiceSharedInvoices"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("128");
                    }}
                  >
                    <Link to="/PaymentInvoiceSharedInvoices">
                      <AddShoppingCart />
                      <span>اشتراک گذاری فاکتور</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item129"
                    aria-label="PaymentPaymentGeteway"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("129");
                    }}
                  >
                    <Link to="/PaymentPaymentGeteway">
                      <Contactless />
                      <span>درگاه پرداخت</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item130"
                    aria-label="PaymentPricingPlans"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("130");
                    }}
                  >
                    <Link to="/PaymentPricingPlans">
                      <Payment />
                      <span>طرح های قیمت گذاری </span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">تبلیغات</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items15"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("15");
                  }}
                >
                  <section>
                    <Campaign />

                    <span>تبلیغات</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items15" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner15">
                  <li
                    className="link-items link-item131"
                    aria-label="AdsAdPricing"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("131");
                    }}
                  >
                    <Link to="/AdsAdPricing">
                      <AddBox />
                      <span>قیمت آگهی و جزئیات دیگر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item132"
                    aria-label="AdsAdRequestAndEnquiry"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("132");
                    }}
                  >
                    <Link to="/AdsAdRequestAndEnquiry">
                      <AddBox />
                      <span>درخواست اگهی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item133"
                    aria-label="AdsCreateNewAds"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("133");
                    }}
                  >
                    <Link to="/AdsCreateNewAds">
                      <Create />
                      <span>ایجاد تبلیغات جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item134"
                    aria-label="AdsCuurentAds"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("134");
                    }}
                  >
                    <Link to="/AdsCuurentAds">
                      <AllOut />
                      <span>تبلیغات کنونی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item135"
                    aria-label="AdsGoogleAdSense"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("135");
                    }}
                  >
                    <Link to="/AdsGoogleAdSense">
                      <Google />
                      <span>Google AdSense</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item136"
                    aria-label="AdsAddNewSlider"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("136");
                    }}
                  >
                    <Link to="/AdsAddNewSlider">
                      <AddBox />
                      <span>اضافه کردن اسلایدر جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item137"
                    aria-label="AdsAllSliderImages"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("137");
                    }}
                  >
                    <Link to="/AdsAllSliderImages">
                      <AllOut />
                      <span>همه تصاویر اسلایدر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item138"
                    aria-label="AdsDeleteSlider"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("138");
                    }}
                  >
                    <Link to="/AdsDeleteSlider">
                      <Delete />
                      <span>حذف اسلایدر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item139"
                    aria-label="AdsEditSlider"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("139");
                    }}
                  >
                    <Link to="/AdsEditSlider">
                      <SettingsApplications />
                      <span>ویرایش اسلایدر</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">تنظیمات سایت</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items16"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("16");
                  }}
                >
                  <section>
                    <SettingsApplications />

                    <span>تنظیمات سایت</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items16" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner16">
                  <li
                    className="link-items link-item140"
                    aria-label="SiteSetting"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("140");
                    }}
                  >
                    <Link to="/SiteSetting">
                      <Settings />
                      <span>تنظیمات سایت</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">ظاهر</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items17"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("17");
                  }}
                >
                  <section>
                    <AppRegistration />

                    <span>ظاهر</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items17" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner17">
                  <li
                    className="link-items link-item141"
                    aria-label="AppearanceColorSetting"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("141");
                    }}
                  >
                    <Link to="/AppearanceColorSetting">
                      <Diamond />
                      <span>تنظیم رنگ ظاهری</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item142"
                    aria-label="AppearanceFeatureEnableAndDisable"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("142");
                    }}
                  >
                    <Link to="/AppearanceFeatureEnableAndDisable">
                      <ToggleOn />
                      <span>فعال کردن و غیرفعال کردن ویژگی ظاهری</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item143"
                    aria-label="AppearanceMediaLibrary"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("143");
                    }}
                  >
                    <Link to="/AppearanceMediaLibrary">
                      <LocalLibrary />
                      <span>کتابخانه رسانه ای ظاهر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item144"
                    aria-label="AppearanceWebsiteLogo"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("144");
                    }}
                  >
                    <Link to="/AppearanceWebsiteLogo">
                      <AllOut />
                      <span>لوگوی وب سایت ظاهری</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">
                سامانه مدیریت محتوا
              </li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items18"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("18");
                  }}
                >
                  <section>
                    <SettingsSystemDaydream />

                    <span>سامانه مدیریت محتوا</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items18" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner18">
                  <li
                    className="link-items link-item145"
                    aria-label="CmsAllTextChange"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("145");
                    }}
                  >
                    <Link to="/CmsAllTextChange">
                      <ChangeCircle />
                      <span>تغییر تمام متن</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item146"
                    aria-label="CmsDummyImages"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("146");
                    }}
                  >
                    <Link to="/CmsDummyImages">
                      <Image />
                      <span>تصاویر ساختگی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item147"
                    aria-label="CmsFooterFooterCMS"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("147");
                    }}
                  >
                    <Link to="/CmsFooterFooterCMS">
                      <SportsSoccer />
                      <span>فوتر CMS</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item148"
                    aria-label="CmsFooterFooterPopularTags"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("148");
                    }}
                  >
                    <Link to="/CmsFooterFooterPopularTags">
                      <Tag />
                      <span>برچسب های محبوب فوتر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item149"
                    aria-label="CmsHomePageChooseCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("149");
                    }}
                  >
                    <Link to="/CmsHomePageChooseCategory">
                      <Category />
                      <span>صفحه اصلی دسته را انتخاب کنید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item150"
                    aria-label="CmsHomePageChooseTrendingCategory"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("150");
                    }}
                  >
                    <Link to="/CmsHomePageChooseTrendingCategory">
                      <Category />
                      <span>صفحه اصلی دسته پرطرفدار را انتخاب کنید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item151"
                    aria-label="CmsHomePageFeatureEvents"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("151");
                    }}
                  >
                    <Link to="/CmsHomePageFeatureEvents">
                      <Event />
                      <span>رویدادهای ویژگی صفحه اصلی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item152"
                    aria-label="CmsHomePageHomePageTemplate"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("152");
                    }}
                  >
                    <Link to="/CmsHomePageHomePageTemplate">
                      <Home />
                      <span>صفحه اصلی قالب صفحه اصلی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item153"
                    aria-label="CmsHomePagePopularBusiness"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("153");
                    }}
                  >
                    <Link to="/CmsHomePagePopularBusiness">
                      <Home />
                      <span>صفحه اصلی کسب و کار محبوب</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item154"
                    aria-label="CmsHomePageTopSection"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("154");
                    }}
                  >
                    <Link to="/CmsHomePageTopSection">
                      <Home />
                      <span>صفحه اصلی بخش بالا</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item155"
                    aria-label="CmsHomePageTopServices"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("155");
                    }}
                  >
                    <Link to="/CmsHomePageTopServices">
                      <Home />
                      <span>صفحه اصلی خدمات برتر</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item156"
                    aria-label="CmsMailTemplates"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("156");
                    }}
                  >
                    <Link to="/CmsMailTemplates">
                      <AlternateEmail />
                      <span>قالب های ایمیل</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item157"
                    aria-label="CmsSocialMediaShare"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("157");
                    }}
                  >
                    <Link to="/CmsSocialMediaShare">
                      <IosShare />
                      <span>اشتراک گذاری رسانه های اجتماعی</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">دیگر صفحه ها</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items19"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("19");
                  }}
                >
                  <section>
                    <Pages />

                    <span>دیگر صفحه ها</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items19" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner19">
                  <li
                    className="link-items link-item158"
                    aria-label="OthersActivity"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("158");
                    }}
                  >
                    <Link to="/OthersActivity">
                      <Notifications />
                      <span>نوتیفیکیشن</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item159"
                    aria-label="OthersChat"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("159");
                    }}
                  >
                    <Link to="/OthersChat">
                      <Chat />
                      <span>پیام ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item160"
                    aria-label="OthersFeedBacksAllFeedBacks"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("160");
                    }}
                  >
                    <Link to="/OthersFeedBacksAllFeedBacks">
                      <Feedback />
                      <span>همه فیدبک ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item161"
                    aria-label="OthersImportAndExportExportData"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("161");
                    }}
                  >
                    <Link to="/OthersImportAndExportExportData">
                      <Stars />
                      <span>داده های صادراتی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item162"
                    aria-label="OthersImportAndExportImportData"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("162");
                    }}
                  >
                    <Link to="/OthersImportAndExportImportData">
                      <Stars />
                      <span>داده های وارداتی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item163"
                    aria-label="OthersSendNotificationAllNotification"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("163");
                    }}
                  >
                    <Link to="/OthersSendNotificationAllNotification">
                      <NotificationsNone />
                      <span>همه اعلان ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item164"
                    aria-label="OthersSendNotificationCreateNewNotification"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("164");
                    }}
                  >
                    <Link to="/OthersSendNotificationCreateNewNotification">
                      <AddAlert />
                      <span>ایجاد اعلان جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item165"
                    aria-label="OthersSubAdminAllSubAdmins"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("165");
                    }}
                  >
                    <Link to="/OthersSubAdminAllSubAdmins">
                      <AdminPanelSettings />
                      <span>همه ساب ادمین ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item166"
                    aria-label="OthersSubAdminCreateNewSubAdmins"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("166");
                    }}
                  >
                    <Link to="/OthersSubAdminCreateNewSubAdmins">
                      <AdminPanelSettings />
                      <span>ایجاد زیر ادمین های جدید</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item167"
                    aria-label="OthersToDoList"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("167");
                    }}
                  >
                    <Link to="/OthersToDoList">
                      <ListAlt />
                      <span>لیست کار ها</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">خروج</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items20"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("20");
                  }}
                >
                  <section>
                    <Logout />

                    <span>خروج</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items20" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner20">
                  <li
                    className="link-items link-item168"
                    aria-label="LogOut"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("168");
                    }}
                  >
                    <Link to="/LogOut">
                      <Logout />
                      <span>خروج</span>
                    </Link>
                  </li>
                </ul>
              </section>

              <li className="category-section-menu-sidebar">صفحات اضافه</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items21"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu("21");
                  }}
                >
                  <section>
                    <PagesOutlined />

                    <span>صفحات اضافه</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items21" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner21">
                  <li
                    className="link-items link-item169"
                    aria-label="PagesAddition400Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("169");
                    }}
                  >
                    <Link to="/PagesAddition400Error">
                      <FmdBad />
                      <span>خطای 400</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item170"
                    aria-label="PagesAddition403Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("170");
                    }}
                  >
                    <Link to="/PagesAddition403Error">
                      <Error />
                      <span>خطای 403</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item171"
                    aria-label="PagesAddition404Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("171");
                    }}
                  >
                    <Link to="/PagesAddition404Error">
                      <ReportGmailerrorred />
                      <span>خطای 404</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item172"
                    aria-label="PagesAddition408Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("172");
                    }}
                  >
                    <Link to="/PagesAddition408Error">
                      <Error />
                      <span>خطای 408</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item173"
                    aria-label="PagesAddition500Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("173");
                    }}
                  >
                    <Link to="/PagesAddition500Error">
                      <ErrorOutline />
                      <span>خطای 500</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item174"
                    aria-label="PagesAddition501Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("174");
                    }}
                  >
                    <Link to="/PagesAddition501Error">
                      <ReportGmailerrorred />
                      <span>خطای 501</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item175"
                    aria-label="PagesAddition502Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("175");
                    }}
                  >
                    <Link to="/PagesAddition502Error">
                      <ErrorOutline />
                      <span>خطای 502</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item176"
                    aria-label="PagesAddition503Error"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("176");
                    }}
                  >
                    <Link to="/PagesAddition503Error">
                      <Error />
                      <span>خطای 503</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item177"
                    aria-label="PagesAdditionAccountSetting"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("177");
                    }}
                  >
                    <Link to="/PagesAdditionAccountSetting">
                      <ManageAccounts />
                      <span>تنظیمات حساب</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item178"
                    aria-label="PagesAdditionBlank"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("178");
                    }}
                  >
                    <Link to="/PagesAdditionBlank">
                      <CheckBoxOutlineBlank />
                      <span>خالی</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item179"
                    aria-label="PagesAdditionCalendar"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("179");
                    }}
                  >
                    <Link to="/PagesAdditionCalendar">
                      <CalendarToday />
                      <span>تقویم</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item180"
                    aria-label="PagesAdditionCharts"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("180");
                    }}
                  >
                    <Link to="/PagesAdditionCharts">
                      <BarChart />
                      <span>چارت ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item181"
                    aria-label="PagesAdditionChat"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("181");
                    }}
                  >
                    <Link to="/PagesAdditionChat">
                      <Comment />
                      <span>چت</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item182"
                    aria-label="PagesAdditionFAQ"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("182");
                    }}
                  >
                    <Link to="/PagesAdditionFAQ">
                      <LiveHelp />
                      <span>سوالات متداول</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item183"
                    aria-label="PagesAdditionFileAttachments"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("183");
                    }}
                  >
                    <Link to="/PagesAdditionFileAttachments">
                      <InsertDriveFile />
                      <span>فایل پیوست ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item184"
                    aria-label="PagesAdditionFileDetails"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("184");
                    }}
                  >
                    <Link to="/PagesAdditionFileDetails">
                      <InsertDriveFile />
                      <span>جزئیات فایل ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item185"
                    aria-label="PagesAdditionFileManager"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("185");
                    }}
                  >
                    <Link to="/PagesAdditionFileManager">
                      <DriveFileMove />
                      <span>مدیریت فایل ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item186"
                    aria-label="PagesAdditionFileManagerList"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("186");
                    }}
                  >
                    <Link to="/PagesAdditionFileManagerList">
                      <DriveFileMove />
                      <span>لیست مدیر فایل</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item187"
                    aria-label="PagesAdditionForgetPassword"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("187");
                    }}
                  >
                    <Link to="/PagesAdditionForgetPassword">
                      <Password />
                      <span>فراموشی رمز عبور</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item188"
                    aria-label="PagesAdditionGallery"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("188");
                    }}
                  >
                    <Link to="/PagesAdditionGallery">
                      <Collections />
                      <span>گالری</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item189"
                    aria-label="PagesAdditionLockScreen"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("189");
                    }}
                  >
                    <Link to="/PagesAdditionLockScreen">
                      <LockOpen />
                      <span>صفحه قفل</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item190"
                    aria-label="PagesAdditionResetPassword"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("190");
                    }}
                  >
                    <Link to="/PagesAdditionResetPassword">
                      <RotateLeft />
                      <span>ریست رمز عبور</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item191"
                    aria-label="PagesAdditionShortcut"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("191");
                    }}
                  >
                    <Link to="/PagesAdditionShortcut">
                      <RotateLeft />
                      <span>اضافه کردن شورت کد</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item192"
                    aria-label="PagesAdditionRegister"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("192");
                    }}
                  >
                    <Link to="/PagesAdditionRegister">
                      <AppRegistration />
                      <span>ثبت نام</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item193"
                    aria-label="PagesAdditionLogin"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("193");
                    }}
                  >
                    <Link to="/PagesAdditionLogin">
                      <Login />
                      <span>ورود</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item194"
                    aria-label="PagesAdditionSlider"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("194");
                    }}
                  >
                    <Link to="/PagesAdditionSlider">
                      <Tune />
                      <span>اسلایدر ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item195"
                    aria-label="PagesAdditionTables"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("195");
                    }}
                  >
                    <Link to="/PagesAdditionTables">
                      <TableRows />
                      <span>جداول</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item196"
                    aria-label="PagesAdditionTerms"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("196");
                    }}
                  >
                    <Link to="/PagesAdditionTerms">
                      <Gavel />
                      <span>مقررات</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item197"
                    aria-label="WidgetsButtons"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("197");
                    }}
                  >
                    <Link to="/WidgetsButtons">
                      <Gamepad />
                      <span>دکمه ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item198"
                    aria-label="WidgetsColors"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("198");
                    }}
                  >
                    <Link to="/WidgetsColors">
                      <BorderColor />
                      <span>رنگ ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item199"
                    aria-label="WidgetsIcons"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("199");
                    }}
                  >
                    <Link to="/WidgetsIcons">
                      <Apps />
                      <span>ایکون ها</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item200"
                    aria-label="WidgetsWidget"
                    onClick={() => {
                      this.FuncSetActiveSubMenus("200");
                    }}
                  >
                    <Link to="/WidgetsWidget">
                      <Widgets />
                      <span>ویجت ها</span>
                    </Link>
                  </li>
                </ul>
              </section>
            </ul>

            <section className="section-button-buy-template">
              <a target="_blank" href="#" rel="noreferrer">
                خرید میستر پنل
              </a>
            </section>
          </section>
          {/* End Section Side Bar */}

          {/* Start Section Footer */}
          <footer
            className="footer"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <section className="row w-100 h-100 d-flex align-items-center justify-content-center mr-5 pr-5">
              <span className="text-center mr-5 pr-5">
                حق چاپ © 2022 درست شده توسط{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  title="وبسایت شخصی امیر"
                >
                  امیر
                </a>
              </span>
            </section>
          </footer>
          {/* End Section Footer */}

          {/* Start Section Setting */}
          <section className="setting">
            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>تنظیمات میستر پنل</span>

              <Close
                onClick={() => {
                  this.FuncOpenCloseSetting();
                }}
                titleAccess="بستن تنظیمات"
              />
            </section>

            <section className="section-button-setting">
              <Link
                to="/"
                onClick={() => {
                  this.FuncSetActiveSubMenus("1");
                }}
              >
                صفحه اصلی پنل
              </Link>
            </section>

            <section className="section-button-setting">
              <a
                className="bg-secondary"
                target="_blank"
                href="#/Blog"
                rel="noreferrer"
              >
                نمونه کار های دیگر من
              </a>
            </section>

            <section className="section-button-setting">
              <a className="bg-info" target="_blank" href="#" rel="noreferrer">
                خرید میستر پنل
              </a>
            </section>

            <section className="divider"></section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>عوض کردن تم پنل</span>

              <section
                className="form-check form-switch"
                title="عوض کردن تم پنل"
              >
                <input
                  className="form-check-input cursor-pointer"
                  type="checkbox"
                  id="StateIconDarkLightMode"
                  checked={this.state.StateIconDarkLightMode}
                  onChange={() => {
                    this.FuncDarkLightMode();
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="StateIconDarkLightMode"
                ></label>
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>حذف کردن هدر پنل</span>

              <section
                className="form-check form-switch"
                title="حذف کردن هدر پنل"
              >
                <input
                  className="form-check-input cursor-pointer"
                  type="checkbox"
                  id="StateHeaderPanel"
                  checked={this.state.StateHeaderPanel}
                  onChange={() => {
                    this.FuncHiddenHeader();
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="StateHeaderPanel"
                ></label>
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>حذف کردن منو کناری</span>

              <section
                className="form-check form-switch"
                title="حذف کردن منو کناری"
              >
                <input
                  className="form-check-input cursor-pointer"
                  type="checkbox"
                  id="StateMenuPanel"
                  checked={this.state.StateMenuPanel}
                  onChange={() => {
                    this.FuncHiddenMenu();
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="StateMenuPanel"
                ></label>
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>عوض کردن رنگ پس زمینه</span>

              <section
                className="d-flex align-items-center justify-content-center"
                title="عوض کردن رنگ پس زمینه"
              >
                <input
                  type="color"
                  className="input-color-mp-theme"
                  value={this.state.MpTheme}
                  onChange={() => {
                    this.FuncChangeMpTheme();
                  }}
                  onFocus={() => {
                    this.FuncChangeMpTheme();
                  }}
                />
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>عوض کردن رنگ منو و هدر</span>

              <section
                className="d-flex align-items-center justify-content-center"
                title="عوض کردن رنگ منو و هدر"
              >
                <input
                  type="color"
                  className="input-color-mp-theme-other"
                  value={this.state.MpThemeOther}
                  onChange={() => {
                    this.FuncChangeMpThemeOther();
                  }}
                  onFocus={() => {
                    this.FuncChangeMpThemeOther();
                  }}
                />
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>عوض کردن رنگ مودال ها</span>

              <section
                className="d-flex align-items-center justify-content-center"
                title="عوض کردن رنگ مودال ها"
              >
                <input
                  type="color"
                  className="input-color-mp-theme-dropdown-menu"
                  value={this.state.MpThemeDropdownMenu}
                  onChange={() => {
                    this.FuncChangeMpThemeDropdownMenu();
                  }}
                  onFocus={() => {
                    this.FuncChangeMpThemeDropdownMenu();
                  }}
                />
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>عوض کردن رنگ متن و ایکون</span>

              <section
                className="d-flex align-items-center justify-content-center"
                title="عوض کردن رنگ متن و ایکون"
              >
                <input
                  type="color"
                  className="input-color-mp-theme-color"
                  value={this.state.MpThemeColor}
                  onChange={() => {
                    this.FuncChangeMpThemeColor();
                  }}
                  onFocus={() => {
                    this.FuncChangeMpThemeColor();
                  }}
                />
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>عوض کردن رنگ هاور</span>

              <section
                className="d-flex align-items-center justify-content-center"
                title="عوض کردن رنگ هاور"
              >
                <input
                  type="color"
                  className="input-color-mp-theme-other-hover"
                  value={this.state.MpThemeOtherHover}
                  onChange={() => {
                    this.FuncChangeMpThemeOtherHover();
                  }}
                  onFocus={() => {
                    this.FuncChangeMpThemeOtherHover();
                  }}
                />
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>ریست تنظیمات</span>

              <section title="عوض کردن تم پنل">
                <button
                  onClick={() => {
                    this.FuncResetSetting();
                  }}
                  className="btn btn-primary"
                >
                  <RotateLeft />
                </button>
              </section>
            </section>

            <section className="d-flex align-items-start justify-content-center flex-column p-2 divider">
              <p>بررسی اجمالی</p>

              <section className="p-2 w-100">
                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>موسس و مدیرعامل</span> <span>24</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="20"
                      className="progress-bar progress-bar-xs wd-20p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>طراح UX</span> <span>1</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="15"
                      className="progress-bar progress-bar-xs bg-secondary wd-15p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>استخدام</span> <span>87</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="45"
                      className="progress-bar progress-bar-xs bg-success wd-45p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>مهندس نرم افزار</span> <span>32</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="25"
                      className="progress-bar progress-bar-xs bg-info wd-25p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>مدیر پروژه</span> <span>32</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="25"
                      className="progress-bar progress-bar-xs bg-danger wd-25p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>
              </section>
            </section>

            <section className="button-go-to-todo-list divider">
              <Link
                to="/SiteSetting"
                onClick={() => {
                  this.FuncSetActiveSubMenus("140");
                }}
              >
                رفتن به تنظیمات
              </Link>
            </section>
          </section>
          {/* End Section Setting */}

          {/* Start Section To Do */}
          <section className="todo">
            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <span>لسیت کارها</span>

              <Close
                onClick={() => {
                  this.FuncOpenCloseToDoList();
                }}
                titleAccess="بستن لیست کارها"
              />
            </section>

            <section className="d-flex align-items-center justify-content-between p-2 divider">
              <input
                type="text"
                placeholder="کار خود را بنویسید"
                className="input-add-item-todo-list"
              />

              <AddCircleOutlineOutlined
                onClick={() => {
                  this.FuncAddItemToDoList();
                }}
                titleAccess="اضافه کردن کار جدید"
              />
            </section>

            <section className="d-flex align-items-start justify-content-start flex-column p-2 divider section-items-todo-list">
              {this.state.ToDoListData || this.state.ToDoListData !== "[]" ? (
                this.state.ToDoListData.map((item, i) => (
                  <section key={i} className="section-todo-list">
                    <input
                      type="checkbox"
                      className="check-todo-list"
                      defaultChecked={item.Complete}
                      onClick={() => {
                        this.FuncCheckItemToDoList(item.Id);
                      }}
                      title="تیک زدن به عنوان انجام شده"
                    />
                    <span className="text-todo-list">{item.Text}</span>

                    <Edit
                      onClick={() => {
                        this.FuncEditItemToDoList(item.Id, item.Text);
                      }}
                      titleAccess="ویرایش کار مورد نظر"
                    />
                    <Delete
                      onClick={() => {
                        this.FuncDeleteItemToDoList(item.Id);
                      }}
                      titleAccess="حذف کردن کار مورد نظر"
                    />
                  </section>
                ))
              ) : (
                <p className="m-auto mb-0 mt-0">کاری برای نمایش وجود نداشت</p>
              )}
            </section>

            <section className="d-flex align-items-start justify-content-center flex-column p-2 divider">
              <p>بررسی اجمالی</p>

              <section className="p-2 w-100">
                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>موسس و مدیرعامل</span> <span>24</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="20"
                      className="progress-bar progress-bar-xs wd-20p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>طراح UX</span> <span>1</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="15"
                      className="progress-bar progress-bar-xs bg-secondary wd-15p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>استخدام</span> <span>87</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="45"
                      className="progress-bar progress-bar-xs bg-success wd-45p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>مهندس نرم افزار</span> <span>32</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="25"
                      className="progress-bar progress-bar-xs bg-info wd-25p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>

                <section className="main-traffic-detail-item">
                  <section className="d-flex align-items-start justify-content-between">
                    <span>مدیر پروژه</span> <span>32</span>
                  </section>
                  <section className="progress">
                    <section
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="25"
                      className="progress-bar progress-bar-xs bg-danger wd-25p"
                      role="progressbar"
                    ></section>
                  </section>
                </section>
              </section>
            </section>

            <section className="button-go-to-todo-list divider">
              <Link
                to="/OthersToDoList"
                onClick={() => {
                  this.FuncSetActiveSubMenus("167");
                }}
              >
                رفتن به لیست کارها
              </Link>
            </section>
          </section>
          {/* End Section To Do */}

          {/* Start Section Profile */}
          <section className="profile">
            <ul
              onClick={() => {
                this.FuncCloseAllBox();
              }}
            >
              <li className="divider li-profile">
                <Link
                  to="/PagesAdditionAccountSetting"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("177");
                  }}
                >
                  <img
                    alt="Profile"
                    loading="lazy"
                    src="/Assets/Images/Profiles/Profile.png"
                    className="image-profile-inner"
                  />
                  <section className="text-profile">
                    <p>امیر</p>
                    <p>توسعه دهنده وب</p>
                  </section>
                </Link>
              </li>

              <li>
                <Link
                  to="/PagesAdditionAccountSetting"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("177");
                  }}
                >
                  <PermIdentityOutlined />
                  <span>پروفایل</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/CmsMailTemplates"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("156");
                  }}
                >
                  <MailOutlined />
                  <span>صندوق ورودی</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/OthersChat"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("159");
                  }}
                >
                  <ChatBubbleOutlineOutlined />
                  <span>پیام ها</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/PaymentPricingPlans"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("130");
                  }}
                >
                  <AttachMoneyOutlined />
                  <span>طرح های قیمت گذاری</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/SiteSetting"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("140");
                  }}
                >
                  <Settings />
                  <span>تنظیمات</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/PagesAdditionFAQ"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("179");
                  }}
                >
                  <HelpOutlineOutlined />
                  <span>کمک</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/PaymentAllPayment"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("125");
                  }}
                >
                  <AttachMoneyOutlined />
                  <span>همه پرداخت ها</span>
                </Link>
              </li>

              <li className="divider">
                <Link
                  to="/OthersActivity"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("158");
                  }}
                >
                  <MovingOutlined />
                  <span>نوتیفیکیشن</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/LogOut"
                  onClick={() => {
                    this.FuncSetActiveSubMenus("168");
                  }}
                >
                  <LoginOutlined />
                  <span>خروج از سیستم</span>
                </Link>
              </li>
            </ul>
          </section>
          {/* End Section Profile */}

          {/* Start Section Notification */}
          <section className="notification">
            <ul>
              <li className="divider d-flex align-items-center justify-content-between">
                <span>
                  شما {this.state.NotificationsData.length} نوتیفیکیشن دارید
                </span>

                <span
                  title="تعداد نوتیفیکیشن های دریافت شده"
                  className="new-message-notification"
                >
                  {this.state.NotificationsData.length}
                </span>
              </li>

              {this.state.NotificationsData ||
              this.state.NotificationsData !== "[]" ? (
                this.state.NotificationsData.map((item, i) => (
                  <li className="divider li-notification" key={i}>
                    <Link
                      to={item.Link}
                      onClick={() => {
                        this.FuncSetActiveSubMenus("163");
                      }}
                    >
                      <img
                        alt="Profile"
                        loading="lazy"
                        src={item.Img}
                        className="image-notification-inner"
                      />
                      <section className="text-notification">
                        <p className="text-font-14">{item.Text}</p>
                        <p className="text-font-12">{item.Time}</p>
                      </section>
                    </Link>
                    <section className="close-notification">
                      <Close
                        titleAccess="حذف نوتیفیکیشن مورد نظر"
                        onClick={() => {
                          this.FuncDeleteNotification(item.Id);
                        }}
                      />
                    </section>
                  </li>
                ))
              ) : (
                <p className="m-auto mb-0 mt-0">
                  نوتیفیکیشنی برای نمایش وجود نداشت
                </p>
              )}

              <li className="divider">
                <Link
                  to="/OthersSendNotificationAllNotification"
                  onClick={() => {
                    this.FuncCloseAllBox();
                    this.FuncSetActiveSubMenus("163");
                  }}
                >
                  <section className="text-notification-center">
                    <span className="text-center">دیدن همه نوتیفیکیشن ها</span>
                  </section>
                </Link>
              </li>
            </ul>
          </section>
          {/* End Section Notification */}

          {/* Start Section Search Box */}
          <section className="search-box">
            <form className="form-search" method="GET">
              <input
                placeholder="جستجو"
                className="input-form-search"
                name="Search"
                required={true}
              />

              <button type="submit" className="button-form-search">
                <Search titleAccess="جستجوی کلمه مورد نظر" />
              </button>
            </form>
          </section>
          {/* End Section Search Box */}

          {/* Start Section Language */}
          <section className="language">
            <ul>
              {this.state.LanguageData.map((item, i) => (
                <li
                  onClick={() => {
                    this.FuncSetActiveLanguage();
                    this.FuncCloseAllBox();
                  }}
                  className={item.ClassName}
                  key={i}
                >
                  <img
                    alt={item.Text}
                    loading="lazy"
                    src={item.Img}
                    className="image-country"
                  />
                  <span>{item.Text}</span>
                </li>
              ))}
            </ul>
          </section>
          {/* End Section Language */}

          {/* Start Section Message */}
          <section className="message">
            <ul>
              <li className="divider d-flex align-items-center justify-content-between">
                <span>شما {this.state.MessageData.length} پیام دارید</span>

                <span
                  title="تعداد پیام های دریافت شده"
                  className="new-message-message"
                >
                  {this.state.MessageData.length}
                </span>
              </li>

              {this.state.MessageData || this.state.MessageData !== "[]" ? (
                this.state.MessageData.map((item, i) => (
                  <li className="divider li-message" key={i}>
                    <Link
                      to={item.Link}
                      onClick={() => {
                        this.FuncSetActiveSubMenus("159");
                      }}
                    >
                      <img
                        alt="Profile"
                        loading="lazy"
                        src={item.Img}
                        className="image-message-inner"
                      />
                      <section className="text-message">
                        <p className="text-font-14">{item.Text}</p>
                        <p className="text-font-12">{item.Time}</p>
                      </section>
                    </Link>
                    <section className="close-message">
                      <Close
                        titleAccess="حذف پیام مورد نظر"
                        onClick={() => {
                          this.FuncDeleteMessage(item.Id);
                        }}
                      />
                    </section>
                  </li>
                ))
              ) : (
                <p className="m-auto mb-0 mt-0">پیامی برای نمایش وجود نداشت</p>
              )}

              <li className="divider">
                <Link
                  to="/OthersChat"
                  onClick={() => {
                    this.FuncCloseAllBox();
                    this.FuncSetActiveSubMenus("159");
                  }}
                >
                  <section className="text-message-center">
                    <span className="text-center">دیدن همه پیام ها</span>
                  </section>
                </Link>
              </li>
            </ul>
          </section>
          {/* End Section Message */}

          {/* Start Section Short Code */}
          <section className="short-code">
            <section className="d-flex align-items-center justify-content-between divider p-2">
              <span>شورت کد ها</span>

              <Link
                to="/PagesAdditionShortcut"
                onClick={() => {
                  this.FuncSetActiveSubMenus("190");
                }}
              >
                <AddCircleOutlineOutlined
                  onClick={() => {
                    this.FuncAddShortCode();
                  }}
                  titleAccess="اضافه کردن شورت کد"
                />
              </Link>
            </section>

            <section className="d-flex align-items-center justify-content-between">
              <section
                className="items-short-code"
                onClick={() => {
                  this.FuncOpenCloseSetting();
                }}
              >
                <Settings />

                <span>تنظیمات</span>

                <span>رفتن به تنظیمات</span>
              </section>

              <section
                className="items-short-code"
                onClick={() => {
                  this.FuncOpenCloseToDoList();
                }}
              >
                <FormatListBulleted />

                <span>لیست کار ها</span>

                <span>رفتن به کار ها</span>
              </section>
            </section>

            <section className="d-flex align-items-center justify-content-between">
              <Link
                to="/PagesAdditionFAQ"
                className="items-short-code"
                onClick={() => {
                  this.FuncCloseAllBox();
                  this.FuncSetActiveSubMenus("179");
                }}
              >
                <HelpOutlineOutlined />

                <span>کمک</span>

                <span>رفتن به کمک</span>
              </Link>

              <Link
                to="/"
                className="items-short-code"
                onClick={() => {
                  this.FuncCloseAllBox();
                  this.FuncSetActiveSubMenus("1");
                }}
              >
                <Dashboard />

                <span>داشبورد</span>

                <span>رفتن به داشبورد</span>
              </Link>
            </section>
          </section>
          {/* End Section Short Code */}
        </section>

        {/* Start Section Back To Top */}
        <section
          className="section-to-top-page"
          onClick={() => {
            this.FuncToTopPage();
          }}
        >
          <ArrowUpward titleAccess="رفتن به بالا" />
        </section>
        {/* End Section Back To Top */}
      </BrowserRouter>
    );
  }
  ////////////////////////////////////////////////////////////////////// End Section Render
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
