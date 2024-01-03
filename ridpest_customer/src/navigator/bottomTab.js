import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {verticalScale} from "react-native-size-matters";
import {Platform} from "react-native";
import HomeStack from "./homeStack";
import {GalleryIcon, HomeIcon, MenuIcon, PersonIcon, SearchIcon} from "../assets/J_icons/bottomIcons";
import {GalleryScreen, MenuScreen, ProfileScreen, SearchScreen} from "../screens";
import AppColors from "../utils/ColorApp";
import ProfileStack from "./profileStack";

const Tab = createBottomTabNavigator();

const shouldBeCutOffHeight = Platform.OS === "android" ? 10 : 0;

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        showLabel: false,
        tabBarStyle: {
          backgroundColor: AppColors.mainBG,
          height: Math.round(verticalScale(60)) - shouldBeCutOffHeight,
          elevation: 1,
          paddingVertical: 5,
          // paddingBottom: Math.round(verticalScale(5)),
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name="HomeStack"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <HomeIcon color={focused ? AppColors.appYellow : "#969696"} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        component={ProfileStack}
        name="ProfileStack"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <SearchIcon color={focused ? AppColors.appYellow : "#969696"} />
              </>
            );
          },
        }}
      />

      <Tab.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <PersonIcon color={focused ? AppColors.appYellow : "#969696"} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        component={GalleryScreen}
        name="GalleryScreen"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <GalleryIcon color={focused ? AppColors.appYellow : "#969696"} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        component={MenuScreen}
        name="MenuScreen"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <MenuIcon color={focused ? AppColors.appYellow : "#969696"} />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
