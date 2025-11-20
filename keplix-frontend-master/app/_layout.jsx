import "../global.css";
import {useFonts} from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/components/Vendor/Login";
import SignIn from "@/components/Vendor/SignIn";
import ForgotPassword from "@/components/Vendor/ForgotPassword";
import ForgotPasswordOTP from "@/components/Vendor/ForgotPasswordOTP";
import ResetPassword from "@/components/Vendor/ResetPassword";
import PasswordChanged from "@/components/Vendor/PasswordChanged"
import SignUp from "@/components/Vendor/SignUp";
import SignUpPhone from "@/components/Vendor/SignUpPhone";
import SendOtp from "@/components/Vendor/SignUpSendOtp";
import SignUpSendOtp from "@/components/Vendor/SignUpSendOtp";
import SignUpPhoneOTP from "@/components/Vendor/SignUpPhoneOTP";
import Register from "@/components/Vendor/Register";
import Verification from "@/components/Vendor/Verification";
import EmailVerify from "@/components/Vendor/EmailVerify";
import OtpVerified from "@/components/Vendor/OtpVerified";
import ShopSetup from "@/components/Vendor/ShopProfile/ShopSetup"
import ShopProfile from "@/components/Vendor/ShopProfile/ShopProfile"
import EditShopProfile from "@/components/Vendor/ShopProfile/EditShopProfile"
import MyDocuments from "@/components/Vendor/ShopProfile/MyDocuments"
import SupportandHelp from "@/components/Vendor/ShopProfile/SupportandHelp"
import KeplixSupport from "@/components/Vendor/ShopProfile/KeplixSupport"
import FAQs from "@/components/Vendor/ShopProfile/FAQs"
import ShopSetup2 from "@/components/Vendor/ShopProfile/ShopSetup2"
import ShopSetup3 from "@/components/Vendor/ShopProfile/ShopSetup3"
import HolidayBreak from "@/components/Vendor/ShopProfile/HolidayBreak"
import ServiceList from "@/components/Vendor/ShopProfile/ServiceList"
import AddService from "@/components/Vendor/ShopProfile/AddService"
import HomePage from "@/components/Vendor/HomePage/HomePage"
import HamburgerMenu from "@/components/Vendor/HomePage/HamburgerMenu"
import Profile from "@/components/Vendor/HomePage/Profile"
import BusinessProfile from "@/components/Vendor/HomePage/BusinessProfile"
import MyBookings from "@/components/Vendor/Bookings/MyBookings"
import Bookings from "@/components/Vendor/Bookings/Bookings"
import BookingConfirmation from "@/components/Vendor/Bookings/BookingConfirmation"
import RescheduleBooking from "@/components/Vendor/Bookings/RescheduleBookings"
import RescheduleBooking2 from "@/components/Vendor/Bookings/RescheduleBooking2"
import RescheduledBooking from "@/components/Vendor/Bookings/RescheduledBooking"
import ServiceCompletion from "@/components/Vendor/Bookings/ServiceCompletion"
import ServiceCompleted from "@/components/Vendor/Bookings/ServiceCompleted"
import Documents from "@/components/Vendor/ProfilePages/Documents"
import Support from "@/components/Vendor/ProfilePages/Support"
import VendorSupport from "@/components/Vendor/ProfilePages/VendorSupport"
import FAQ from "@/components/Vendor/ProfilePages/FAQ"
import CommunityForum from "@/components/Vendor/ProfilePages/CommunityForm"
import CommunityForm2 from "@/components/Vendor/ProfilePages/CommunityForm2"
import TrackPerformance from "@/components/Vendor/TrackPerformance/TrackPerformance"
import PromotionPerformance from "@/components/Vendor/TrackPerformance/PromotionPerformance"
import PromotionPerformance2 from "@/components/Vendor/TrackPerformance/PromotionPerformance2"
import FinancialReports from "@/components/Vendor/TrackPerformance/FinancialReports"
import Earnings from "@/components/Vendor/TrackPerformance/Earnings"
import TransactionDetails from "@/components/Vendor/TrackPerformance/TransactionDetails"
import MyShop from "@/components/Vendor/MyShop/MyShop"
import CustomerReviews from "@/components/Vendor/MyShop/CustomerReviews"
import CustomerFeedback from "@/components/Vendor/MyShop/CustomerFeedback"
import CustomerChat from "@/components/Vendor/MyShop/CustomerChat"
import PayoutManagement from "@/components/Vendor/MyShop/PayoutManagement"
import MyPromotions from "@/components/Vendor/MyShop/MyPromotions"
import NewPromotion from "@/components/Vendor/MyShop/NewPromotion"
import CreatePromotion from "@/components/Vendor/MyShop/CreatePromotion"
import CardConfirm from "@/components/Vendor/MyShop/CardConfirm"
import MyInventory from "@/components/Vendor/MyShop/MyInventory"
import AddInventory from "@/components/Vendor/MyShop/AddInventory"
import AddInventoryList from "@/components/Vendor/MyShop/AddInventoryList"
import InventoryManagement from "@/components/Vendor/MyShop/InventoryManagement"
import Payment1 from "@/components/Vendor/PaymentMethods/Payment1"
import Payment2 from "@/components/Vendor/PaymentMethods/Payment2"
import Payment3 from "@/components/Vendor/PaymentMethods/Payment3"
import PaymentSuccess from "@/components/Vendor/PaymentMethods/PaymentSuccess"
import PaymentConfirmation from "@/components/Vendor/PaymentMethods/PaymentConfirmation"
import Payment4 from "@/components/Vendor/PaymentMethods/Payment4"
import Payment5 from "@/components/Vendor/PaymentMethods/Payment5"
import PhoneVerified from "@/components/Vendor/PhnVerified";
import SignInPhone from "@/components/Vendor/SignInPhone"
import SignInPhoneOTP from "@/components/Vendor/SignInPhoneOTP"

const Stack = createStackNavigator();

export default function RootLayout() {

  useFonts({
    "DM":require('./../assets/fonts/DMSans-VariableFont_opsz,wght.ttf')
  })
  

  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomePage">
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignInPhone" component={SignInPhone} />
        <Stack.Screen name="SignInPhoneOTP" component={SignInPhoneOTP} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
        <Stack.Screen name="SendPhoneOTP" component={SignUpPhoneOTP} />
        <Stack.Screen name="PhnVerified" component={PhoneVerified} />
        <Stack.Screen name="SignUpSendOTP" component={SignUpSendOtp} />
        <Stack.Screen name="SendOtp" component={SendOtp} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="EmailVerify" component={EmailVerify} />
        <Stack.Screen name="OtpVerified" component={OtpVerified} />
        <Stack.Screen name="ShopProfile" component={ShopProfile} />
        <Stack.Screen name="EditShopProfile" component={EditShopProfile} />
        <Stack.Screen name="MyDocuments" component={MyDocuments} />
        <Stack.Screen name="SupportandHelp" component={SupportandHelp} />
        <Stack.Screen name="KeplixSupport" component={KeplixSupport} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="ShopSetup" component={ShopSetup} />
        <Stack.Screen name="ShopSetup2" component={ShopSetup2} />
        <Stack.Screen name="ShopSetup3" component={ShopSetup3} />
        <Stack.Screen name="HolidayBreak" component={HolidayBreak} />
        <Stack.Screen name="ServiceList" component={ServiceList} />
        <Stack.Screen name="AddService" component={AddService} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="HamburgerMenu" component={HamburgerMenu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
        <Stack.Screen name="MyBookings" component={MyBookings} />
        <Stack.Screen name="Bookings" component={Bookings} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} />
         <Stack.Screen name="RescheduleBooking" component={RescheduleBooking} />
         <Stack.Screen name="RescheduleBooking2" component={RescheduleBooking2} />
         <Stack.Screen name="RescheduledBooking" component={RescheduledBooking} />
         <Stack.Screen name="ServiceCompletion" component={ServiceCompletion} />
         <Stack.Screen name="ServiceCompleted" component={ServiceCompleted} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="VendorSupport" component={VendorSupport} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="CommunityForum" component={CommunityForum} />
        <Stack.Screen name="CommunityForm2" component={CommunityForm2} />
        <Stack.Screen name="TrackPerformance" component={TrackPerformance} />
        <Stack.Screen name="PromotionPerformance" component={PromotionPerformance} />
        <Stack.Screen name="PromotionPerformance2" component={PromotionPerformance2} />
        <Stack.Screen name="FinancialReports" component={FinancialReports} />
        <Stack.Screen name="Earnings" component={Earnings} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
        <Stack.Screen name="MyShop" component={MyShop} />
        <Stack.Screen name="CustomerReviews" component={CustomerReviews} />
        <Stack.Screen name="CustomerFeedback" component={CustomerFeedback} />
        <Stack.Screen name="CustomerChat" component={CustomerChat} />
        <Stack.Screen name="PayoutManagement" component={PayoutManagement} />
        <Stack.Screen name="MyPromotions" component={MyPromotions} />
        <Stack.Screen name="NewPromotion" component={NewPromotion} />
        <Stack.Screen name="CreatePromotion" component={CreatePromotion} />
        <Stack.Screen name="CardConfirm" component={CardConfirm} />
        <Stack.Screen name="MyInventory" component={MyInventory} />
        <Stack.Screen name="AddInventory" component={AddInventory} />
        <Stack.Screen name="AddInventoryList" component={AddInventoryList} />
        <Stack.Screen name="InventoryManagement" component={InventoryManagement} />
        <Stack.Screen name="Payment1" component={Payment1} />
        <Stack.Screen name="Payment2" component={Payment2} />
        <Stack.Screen name="Payment3" component={Payment3} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
        <Stack.Screen name="Payment4" component={Payment4} />
        <Stack.Screen name="Payment5" component={Payment5} />

      </Stack.Navigator>
   
  );
}
