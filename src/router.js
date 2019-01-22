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
import FoodReportFilterDate from "./screens/FoodReportFilterDate";
import FoodReportFilterResult from "./screens/FoodReportFilterResult";
import ActivityReport from "./screens/ActivityReport";
import ActivityReportFilterDate from "./screens/ActivityReportFilterDate";
import ActivityReportFilterResult from "./screens/ActivityReportFilterResult";
import MedicalReport from "./screens/MedicalReport";
import MedicalReportFilterDate from "./screens/MedicalReportFilterDate";
import MedicalReportFilterResultBerat from "./screens/MedicalReportFilterResultBerat";
import MedicalReportFilterResultTinggi from "./screens/MedicalReportFilterResultTinggi";
import MedicalReportFilterResultSuhu from "./screens/MedicalReportFilterResultSuhu";
import AcademicReportGraph from "./screens/AcademicReportGraph";
import AcademicReportGrade from "./screens/AcademicReportGrade";
import AcademicReportFilterDate from "./screens/AcademicReportFilterDate";
import AcademicReportFilterResultGraph from "./screens/AcademicReportFilterResultGraph";
import AcademicReportFilterResultGrade from "./screens/AcademicReportFilterResultGrade";
import PottyReport from "./screens/PottyReport";
import PottyReportFilterDate from "./screens/PottyReportFilterDate";
import PottyReportFilterResult from "./screens/PottyReportFilterResult";
import IncidentReport from "./screens/IncidentReport";
import IncidentReportFilterDate from "./screens/IncidentReportFilterDate";
import IncidentReportFilterResult from "./screens/IncidentReportFilterResult";
import MilkReport from "./screens/MilkReport";
import MilkReportFilterDate from "./screens/MilkReportFilterDate";
import MilkReportFilterResult from "./screens/MilkReportFilterResult";
import NapReport from "./screens/NapReport";
import NapReportFilterDate from "./screens/NapReportFilterDate";
import NapReportFilterResult from "./screens/NapReportFilterResult";
import OtherReport from "./screens/OtherReport";
import OtherReportFilterDate from "./screens/OtherReportFilterDate";
import OtherReportFilterResult from "./screens/OtherReportFilterResult";
import Schedule from "./screens/PageSchedule/Schedule";
import ScheduleDetail from "./screens/PageSchedule/ScheduleDetail";
import ScheduleEdit from "./screens/PageSchedule/ScheduleEdit";
import ScheduleNew from "./screens/PageSchedule/ScheduleNew";
import Attendance from "./screens/PageAttendance/Attendance";
import Bulletin from "./screens/PageBulletin/Bulletin";
import DetailBulletin from "./screens/PageBulletin/DetailBulletin";
import DetailBlog from "./screens/PageBulletin/DetailBlog";
import DetailEvent from "./screens/PageBulletin/DetailEvent";
import DetailNews from "./screens/PageBulletin/DetailNews";
import DetailTips from "./screens/PageBulletin/DetailTips";
import AddActivity from "./screens/PageOtherMenu/AddActivity";
import PottyActivity from "./screens/PageOtherMenu/PottyActivity";
import DraftActivity from "./screens/PageOtherMenu/DraftActivity";
import IncidentActivity from "./screens/PageOtherMenu/IncidentActivity";
import MilkActivity from "./screens/PageOtherMenu/MilkActivity";
import NapActivity from "./screens/PageOtherMenu/NapActivity";
import OtherActivity from "./screens/PageOtherMenu/OtherActivity";
import Settings from "./screens/PageSettings/Settings";
import AccountSetting from "./screens/PageSettings/AccountSetting";
import PasswordSetting from "./screens/PageSettings/PasswordSetting";
import LanguageSetting from "./screens/PageSettings/LanguageSetting";
import Notification from "./screens/PageNotification/Notification";
import Medical from "./screens/PageMedical/Medical";
import Academic from "./screens/PageAcademic/Academic";
import Food from "./screens/PageFood/Food";
import Other from "./screens/PageOther/Other";
import Activity from "./screens/PageActivity/Activity";
import StudentReport from "./screens/StudentReport";
import StudentGet from "./screens/PageStudent/StudentGet";
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
    FoodReportFilterDate: {
      screen: FoodReportFilterDate,
      navigationOptions: {
        title: "Food"
      }
    },
    FoodReportFilterResult: {
      screen: FoodReportFilterResult,
      navigationOptions: {
        title: "Food"
      }
    },
    ActivityReport: {
      screen: ActivityReport,
      navigationOptions: {
        title: "Activity"
      }
    },
    StudentGet: {
      screen: StudentGet,
      navigationOptions: {
        title: "Students"
      }
    },
    ActivityReportFilterDate: {
      screen: ActivityReportFilterDate,
      navigationOptions: {
        title: "Activity"
      }
    },
    ActivityReportFilterResult: {
      screen: ActivityReportFilterResult,
      navigationOptions: {
        title: "Activity"
      }
    },
    MedicalReport: {
      screen: MedicalReport,
      navigationOptions: {
        title: "Medical"
      }
    },
    MedicalReportFilterDate: {
      screen: MedicalReportFilterDate,
      navigationOptions: {
        title: "Medical"
      }
    },
    MedicalReportFilterResultBerat: {
      screen: MedicalReportFilterResultBerat,
      navigationOptions: {
        title: "Medical"
      }
    },
    MedicalReportFilterResultTinggi: {
      screen: MedicalReportFilterResultTinggi,
      navigationOptions: {
        title: "Medical"
      }
    },
    MedicalReportFilterResultSuhu: {
      screen: MedicalReportFilterResultSuhu,
      navigationOptions: {
        title: "Medical"
      }
    },
    AcademicReportGraph: {
      screen: AcademicReportGraph,
      navigationOptions: {
        title: "Academic"
      }
    },
    AcademicReportGrade: {
      screen: AcademicReportGrade,
      navigationOptions: {
        title: "Academic"
      }
    },
    AcademicReportFilterDate: {
      screen: AcademicReportFilterDate,
      navigationOptions: {
        title: "Academic"
      }
    },
    AcademicReportFilterResultGraph: {
      screen: AcademicReportFilterResultGraph,
      navigationOptions: {
        title: "Academic"
      }
    },
    AcademicReportFilterResultGrade: {
      screen: AcademicReportFilterResultGrade,
      navigationOptions: {
        title: "Academic"
      }
    },
    PottyReport: {
      screen: PottyReport,
      navigationOptions: {
        title: "Potty"
      }
    },
    PottyReportFilterDate: {
      screen: PottyReportFilterDate,
      navigationOptions: {
        title: "Potty"
      }
    },
    PottyReportFilterResult: {
      screen: PottyReportFilterResult,
      navigationOptions: {
        title: "Potty"
      }
    },
    IncidentReport: {
      screen: IncidentReport,
      navigationOptions: {
        title: "Incident"
      }
    },
    IncidentReportFilterDate: {
      screen: IncidentReportFilterDate,
      navigationOptions: {
        title: "Incident"
      }
    },
    IncidentReportFilterResult: {
      screen: IncidentReportFilterResult,
      navigationOptions: {
        title: "Incident"
      }
    },
    MilkReport: {
      screen: MilkReport,
      navigationOptions: {
        title: "Milk"
      }
    },
    MilkReportFilterDate: {
      screen: MilkReportFilterDate,
      navigationOptions: {
        title: "Milk"
      }
    },
    MilkReportFilterResult: {
      screen: MilkReportFilterResult,
      navigationOptions: {
        title: "Milk"
      }
    },
    NapReport: {
      screen: NapReport,
      navigationOptions: {
        title: "Nap"
      }
    },
    NapReportFilterDate: {
      screen: NapReportFilterDate,
      navigationOptions: {
        title: "Nap"
      }
    },
    NapReportFilterResult: {
      screen: NapReportFilterResult,
      navigationOptions: {
        title: "Nap"
      }
    },
    OtherReport: {
      screen: OtherReport,
      navigationOptions: {
        title: "Other"
      }
    },
    OtherReportFilterDate: {
      screen: OtherReportFilterDate,
      navigationOptions: {
        title: "Other"
      }
    },
    OtherReportFilterResult: {
      screen: OtherReportFilterResult,
      navigationOptions: {
        title: "Other"
      }
    },
    Schedule: {
      screen: Schedule,
      navigationOptions: {
        title: "Schedule"
      }
    },
    ScheduleDetail: {
      screen: ScheduleDetail,
      navigationOptions: {
        title: ""
      }
    },
    ScheduleEdit: {
      screen: ScheduleEdit,
      navigationOptions: {
        title: "Event Detail"
      }
    },
    ScheduleNew: {
      screen: ScheduleNew,
      navigationOptions: {
        title: "New Event"
      }
    },
    Attendance: {
      screen: Attendance,
      navigationOptions: {
        title: "Attendance"
      }
    },
    Bulletin: {
      screen: Bulletin,
      navigationOptions: {
        title: "Bulletin"
      }
    },
    AddActivity: {
      screen: AddActivity,
      navigationOptions: {
        title: "Add Activity"
      }
    },
    PottyActivity: {
      screen: PottyActivity,
      navigationOptions: {
        title: "Potty"
      }
    },
    DraftActivity: {
      screen: DraftActivity,
      navigationOptions: {
        title: "Draft"
      }
    },
    IncidentActivity: {
      screen: IncidentActivity,
      navigationOptions: {
        title: "Incident"
      }
    },
    MilkActivity: {
      screen: MilkActivity,
      navigationOptions: {
        title: "Milk"
      }
    },
    NapActivity: {
      screen: NapActivity,
      navigationOptions: {
        title: "Nap"
      }
    },
    OtherActivity: {
      screen: OtherActivity,
      navigationOptions: {
        title: "Other"
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Setting"
      }
    },
    AccountSetting: {
      screen: AccountSetting,
      navigationOptions: {
        title: "Your Account"
      }
    },
    PasswordSetting: {
      screen: PasswordSetting,
      navigationOptions: {
        title: "Change Password"
      }
    },
    LanguageSetting: {
      screen: LanguageSetting,
      navigationOptions: {
        title: "Change Language"
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        title: "Notification"
      }
    },
    Medical: {
      screen: Medical,
      navigationOptions: {
        title: "Medical"
      }
    },
    Academic: {
      screen: Academic,
      navigationOptions: {
        title: "Academic"
      }
    },
    Food: {
      screen: Food,
      navigationOptions: {
        title: "Food"
      }
    },
    Other: {
      screen: Other,
      navigationOptions: {
        title: "Other"
      }
    },
    DetailBulletin: {
      screen: DetailBulletin,
      navigationOptions: {
        title: "Bulletin"
      }
    },
    DetailBlog: {
      screen: DetailBlog,
      navigationOptions: {
        title: "Blog"
      }
    },
    DetailEvent: {
      screen: DetailEvent,
      navigationOptions: {
        title: "Event"
      }
    },
    DetailNews: {
      screen: DetailNews,
      navigationOptions: {
        title: "News"
      }
    },
    DetailTips: {
      screen: DetailTips,
      navigationOptions: {
        title: "Tips"
      }
    },
    Activity: {
      screen: Activity,
      navigationOptions: {
        title: "Activity"
      }
    },
    StudentReport: {
      screen: StudentReport,
      navigationOptions: {
        title: "Report"
      }
    },
    ImageZoom: {
      screen: ImageZoom,
      navigationOptions: {
        title: "Image"
      }
    }
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