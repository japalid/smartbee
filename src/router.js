import { Platform, StatusBar } from "react-native";
import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Lessons from "./screens/Lessons";
import LessonsMilestone from "./screens/LessonsMilestone";
import LessonsResultDetail from "./screens/LessonsResultDetail";
import LessonsMilestoneDetail from "./screens/LessonsMilestoneList/LessonsMilestoneDetail";
import Students from "./screens/Students";
import DailyReport from "./screens/DailyReport";
import FoodReport from "./screens/FoodReport";
import ImageZoom from "./screens/ImageZoom";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
          title: "Sign In",
          headerStyle
        }
      },  
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerStyle
        }
  }
});

export const SignedIn = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        headerStyle
      }
    },
    Lessons: {
      screen: Lessons,
      navigationOptions: {
        title: "Lessons"
      }
    },
    LessonsResultDetail: {
      screen: LessonsResultDetail,
      navigationOptions: {
        title: "Lessons"
      }
    },
    LessonsMilestone: {
      screen: LessonsMilestone,
      navigationOptions: {
        title: "Lessons"
      }
    },
    LessonsMilestoneDetail: {
      screen: LessonsMilestoneDetail,
      navigationOptions: {
        title: "Lessons"
      }
    },
    Students: {
      screen: Students,
      navigationOptions: {
        title: "Students"
      }
    },
    DailyReport: {
      screen: DailyReport,
      navigationOptions: {
        title: "Daily Report"
      }
    },
    FoodReport: {
      screen: FoodReport,
      navigationOptions: {
        title: "Food"
      }
    },
    ImageZoom: {
      screen: ImageZoom,
      navigationOptions: {
        title: "Image"
      }
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  ));
};