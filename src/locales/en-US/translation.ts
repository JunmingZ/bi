export default {
  "global": {
    "copy": "Copy",
    "tokenExpired": "Token expired, please log in",
    "401": "Not logged in or token expired, please log in again",
    "title": {
      "action": "Action"
    },
    "version": "Version",
    "button": {
      "create": "Create",
      "save": "Save",
      "edit": "Edit",
      "archive": "Archive",
      "restore": "Restore",
      "delete": "Delete",
      "info": "Info",
      "open": "Open",
      "close": "Close",
      "saveAs": "Save As",
      "cancel": "Cancel",
      "ok": "OK",
      "shortcuts": "Shortcuts",
      "saveConfirm": "After saving the changes, it cannot be undone. Are you sure you want to continue saving?"
    },
    "operation": {
      "archiveConfirm": "Archive confirm",
      "restoreConfirm": "Restore confirm",
      "deleteConfirm": "Delete confirm",
      "updateSuccess": "Update successful",
      "deleteSuccess": "Delete successful",
      "archiveSuccess": "Archive successful",
      "restoreSuccess": "Restore successful",
      "parseError": "Configuration parse error"
    },
    "validation": {
      "required": " is required",
      "invalidPassword": "Password must be 6-20 characters",
      "passwordNotMatch": "Password and confirm password do not match"
    },
    "time": {
      "minute": "Minute",
      "hour": "Hour",
      "day": "Day",
      "week": "Week",
      "month": "Month",
      "year": "Year",
      "m": "Minute",
      "h": "Hour",
      "d": "Day",
      "sun": "Sunday",
      "mon": "Monday",
      "tues": "Tuesday",
      "wednes": "Wednesday",
      "thurs": "Thursday",
      "fri": "Friday",
      "satur": "Saturday"
    },
    "modal": {
      "title": {
        "add": "Create ",
        "edit": "Edit "
      }
    },
    "columnType": {
      "string": "String",
      "numeric": "Number",
      "date": "Date"
    },
    "columnCategory": {
      "uncategorized": "Uncategorized",
      "country": "Country",
      "provinceorstate": "Province Or State",
      "city": "City",
      "county": "County"
    }
  },
  "setup": {
    "welcome": "Welcome to datart",
    "welcomeDesc": "Before using datart for the first time, set up an initial user",
    "success": "Success",
    "successDesc": "Initial user set up successfully. Click here to",
    "goLogin": "Log In",
    "username": "Username",
    "email": "Email",
    "password": "Password",
    "name": "Name",
    "initialize": "Initialize"
  },
  "login": {
    "username": "Username / Email",
    "password": "Password",
    "login": "Log in",
    "register": "Sign up for an account",
    "forgotPassword": "Can't log in?",
    "authTitle": "OR",
    "alreadyLoggedIn": "Your account is already logged in",
    "enter": "Click to enter",
    "switch": "Switch account"
  },
  "register": {
    "sendSuccess": "Email sent successfully",
    "username": "Username",
    "email": "Email",
    "password": "Password",
    "register": "Register",
    "desc1": "Already have an account? ",
    "login": "Log In",
    "tipTitle": "Check your email",
    "tipDesc1": "We have sent you email to ",
    "tipDesc2": ". Please",
    "toMailbox": "click the link ",
    "tipDesc3": "to confirm and activate your account.",
    "tipDesc4": "Didn't receive?",
    "resend": "Click to resend email",
    "back": "Go back",
    "registerSuccess": "Success",
    "tipDesc5": "Click here to",
    "tipDesc6": ", or continue to",
    "goLogin": "Log In",
    "continue": "Register"
  },
  "forgotPassword": {
    "return": "Return to log in",
    "email": "Email",
    "enterEmail": "Enter email",
    "emailInvalid": "Invalid email address",
    "username": "Username",
    "enterUsername": "Enter username",
    "nextStep": "Next Step",
    "send": "Send verification code",
    "desc1": "A confirmation email has been sent to ",
    "desc2": "'s mailbox",
    "desc3": ", please go to the mailbox to get the verification code, and then click next to reset the password.",
    "password": "Password",
    "enterNewPassword": "Enter new password",
    "confirmNewPassword": "Confirm new password",
    "verifyCode": "Verification code",
    "reset": "Reset password",
    "resetSuccess": "Your password has been successfully reset"
  },
  "main": {
    "nav": {
      "vizs": "Vizs",
      "views": "Views",
      "sources": "Sources",
      "schedules": "Schedules",
      "members": "Members",
      "permissions": "Permissions",
      "settings": "Settings",
      "download": {
        "title": "Download List",
        "status": {
          "created": "Processing",
          "downloaded": "Downloaded",
          "done": "Done",
          "failed": "Failed"
        }
      },
      "organization": {
        "title": "Organizations",
        "create": "Create organization",
        "name": "Name",
        "desc": "Description",
        "save": "Save and enter"
      },
      "account": {
        "profile": {
          "title": "Profile",
          "clickUpload": "Click to upload",
          "username": "Username",
          "email": "Email",
          "name": "Name",
          "department": "Department",
          "description": "Description"
        },
        "changePassword": {
          "title": "Password",
          "oldPassword": "Password",
          "newPassword": "New password",
          "confirmPassword": "Confirm password"
        },
        "switchLanguage": {
          "title": "Language"
        },
        "switchTheme": {
          "title": "Theme",
          "light": "Light",
          "dark": "Dark"
        },
        "logout": {
          "title": "Logout"
        }
      }
    },
    "subNavs": {
      "variables": {
        "title": "Public variables"
      },
      "orgSettings": {
        "title": "Organization Settings"
      },
      "resourceMigration": {
        "title": "Resource Migration"
      },
      "export": {
        "title": "Export",
        "selectText": "Select the resources to export",
        "submit": "Submit"
      },
      "import": {
        "title": "Import",
        "submit": "Submit",
        "upload": "Upload",
        "file": "File",
        "strategy": "Strategy",
        "new": "New",
        "overwrite": "OverWrite",
        "rollback": "Rollback",
        "desc": {
          "new": "New: All imported resources are recreated.",
          "overwrite": "Overwrite: The system checks whether the imported resource exists in the database by ID. If yes, the system updates the resource. Otherwise, the system creates a new resource.",
          "rollback": "Rollback: The system checks whether the imported resource exists in the database by ID. If the imported resource exists, an error message is displayed and the import operation is rolled back. The import can be completed only if all the checks pass."
        }
      }
    },
    "background": {
      "loading": "Loading...",
      "initError": "Initialization error, please refresh the page and try again",
      "createOrg": "You have not joined any organization, click to create"
    }
  },
  "viz": {
    "common": {
      "enum": {
        "filterOperator": {
          "EQ": "Equal",
          "NE": "Not Equal",
          "IS_NULL": "Null",
          "NOT_NULL": "Not Null",
          "LIKE": "Contain",
          "NOT_LIKE": "Not Contain",
          "PREFIX_LIKE": "Prefix Contain",
          "PREFIX_NOT_LIKE": "Not Prefix Contain",
          "SUFFIX_LIKE": "Suffix Contain",
          "SUFFIX_NOT_LIKE": "Not Suffix Contain",
          "BETWEEN": "Between",
          "NOT_BETWEEN": "Not Between",
          "IN": "In",
          "NOT_IN": "Not In",
          "LT": "Less Than",
          "GT": "Greater Than",
          "LTE": "Less Than Or Equal",
          "GTE": "Greater Than Or Equal"
        },
        "aggregateTypes": {
          "NONE": "None",
          "SUM": "Sum",
          "AVG": "Avg",
          "COUNT": "Count",
          "COUNT_DISTINCT": "Distinct Count",
          "MAX": "Max",
          "MIN": "Min"
        },
        "controllerFacadeTypes": {
          "dropdownList": "Dropdown List",
          "radioGroup": "Radio Group",
          "checkboxGroup": "Checkbox Group",
          "multiDropdownList": "Multiple Dropdown List",
          "rangeTime": "Range Time",
          "rangeTimePicker": "Range Time",
          "recommendTime": "Recommend Time",
          "rangeValue": "Range Value",
          "text": "Text",
          "tree": "Tree",
          "value": "Value",
          "time": "Time",
          "slider": "Slider",
          "rangeSlider": "Range Slider",
          "dropDownTree": "Dropdown tree"
        },
        "controllerPlaceHolders": {
          "multiSelectController": "Select ..",
          "numberController": "Enter a number",
          "rangeNumberControllerMin": "Min",
          "rangeNumberControllerMax": "Max",
          "selectController": "Select ..",
          "textController": "Enter text",
          "treeSelectController": "Select .."
        },
        "controllerVisibilityTypes": {
          "hide": "Hide",
          "show": "Show",
          "condition": "Condition"
        },
        "fontAlignment": {
          "alignment": "Alignment",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "alignment": {
          "center": "Center",
          "left": "Left",
          "right": "Right",
          "top": "Top",
          "bottom": "Bottom",
          "start": "Start",
          "end": "End"
        },
        "position": {
          "left": "Left",
          "right": "Right",
          "top": "Top",
          "bottom": "Bottom"
        }
      },
      "filter": {
        "title": "Filter",
        "filterName": "Filter Name",
        "filterAggregate": "Filter Aggregate",
        "filterVisibility": "Filter Visibility",
        "aggregates": "Aggregates",
        "filterOption": "Filter Option",
        "visibility": "Visibility",
        "facade": "Facade",
        "widthOption": "Width Option",
        "columnName": "Current Edit Column Name",
        "arrange": "Arrange",
        "hide": "Hide",
        "show": "Show",
        "condition": "Condition",
        "min": "Min",
        "max": "Max",
        "radioType": "Style",
        "default": "Default",
        "button": "Button",
        "date": {
          "recommend": "Recommend",
          "manual": "Manual",
          "today": "Today",
          "yesterday": "Yesterday",
          "this_week": "This Week",
          "last_7_days": "Last 7 Days",
          "last_30_days": "Last 30 Days",
          "last_90_days": "Last 90 Days",
          "last_1_month": "Last 1 Month",
          "last_1_year": "Last 1 Year",
          "or": " OR ",
          "seconds": "Seconds",
          "minutes": "Minutes",
          "hours": "Hours",
          "days": "Days",
          "weeks": "Weeks",
          "months": "Months",
          "years": "Years",
          "quarters": "Quarter",
          "ago": "Ago",
          "current": "Current",
          "fromNow": "From Now",
          "select": "Select",
          "currentTime": "Current Time",
          "startTime": "Start Time",
          "endTime": "End Time",
          "exact": "Exact",
          "relative": "Relative"
        },
        "category": {
          "general": "General",
          "customize": "Customize",
          "condition": "Condition",
          "sourceList": "Source",
          "targetList": "Default",
          "moveToLeft": "Remove",
          "moveToRight": "Add",
          "include": "In",
          "notInclude": "Not In",
          "tableHeaderKey": "Value",
          "tableHeaderLabel": "Title",
          "tableHeaderAction": "Operation",
          "deleteRow": "Delete",
          "setDefault": "Set Default",
          "setUnDefault": "Unset Default",
          "addRow": "Add Row",
          "AddFromFields": "Add Row Current Field",
          "associateField": "Associate Field",
          "labelField": "Label Field",
          "useTree": "Tree Style",
          "load": "Load"
        }
      }
    },
    "management": {
      "title": "Widgets Management",
      "subTitle": "Widget List",
      "table": {
        "header": {
          "name": "Name",
          "description": "Description",
          "type": "Type",
          "action": "Action"
        }
      }
    },
    "workbench": {
      "goBack": "Go back",
      "header": {
        "goBack": "Back",
        "run": "Run",
        "save": "Save",
        "saveToDashboard": "Save to dashboard",
        "login": "Login",
        "aggregationSwitch": "Aggregation",
        "aggregationSwitchTip": "All chart configurations will be cleared before enabling/disabling data aggregation, continue?",
        "open": "Open",
        "close": "Close",
        "cancel": "Cancel",
        "downloadList": "Download list",
        "lang": {
          "zh": "zh",
          "en": "en"
        },
        "format": {
          "local": "local",
          "date": "date"
        }
      },
      "dataview": {
        "plsSelectDataView": "Please Select",
        "createComputedFields": "Create Computed Field",
        "createVariableFields": "Create Variable Field",
        "fieldName": "Name",
        "type": "Type",
        "field": "Field",
        "variable": "Variable",
        "functions": "Function List",
        "editField": "Edit",
        "deleteField": "Delete",
        "editViewTip": "Going back to the view will lose the current edit state, continue?",
        "editView": "Edit View",
        "toggleViewTip": "Switching data view will clear the current chart configuration, continue?",
        "AGG_DATE_YEAR": "Year",
        "AGG_DATE_QUARTER": "Quarter",
        "AGG_DATE_MONTH": "Month",
        "AGG_DATE_WEEK": "Week",
        "AGG_DATE_DAY": "Day",
        "default": "Default",
        "cannotDeleteComputerField": "Calculated fields created in views cannot be deleted",
        "byDataBaseGroup": "Group by database name",
        "noGroup": "Not grouped",
        "byNameSort": "Sort by name",
        "noSort": "Sort by original field order",
        "Group": "Group",
        "Sort": "Sort",
        "cancel": "Cancel",
        "empty": "Clear",
        "reserve": "Retain",
        "searchField": "Search Field Name"
      }
    },
    "palette": {
      "title": {
        "content": "Data",
        "design": "Style",
        "setting": "Analytics",
        "interaction": "Interaction"
      },
      "style": {
        "font": "Font",
        "select": "Select ...",
        "table": {
          "header": {
            "newName": "Enter a new header name",
            "merge": "Merge",
            "reset": "Reset",
            "moveUp": "Move Up",
            "moveDown": "Move Down",
            "columnName": "Column Name",
            "backgroundColor": "Background Color",
            "font": "Font",
            "align": {
              "title": "Align",
              "left": "Left",
              "center": "Center",
              "right": "Right"
            }
          }
        },
        "conditionalStyleTable": {
          "btn": {
            "add": "Add",
            "edit": "Edit",
            "remove": "Remove",
            "confirm": "Confirm"
          },
          "modal": {
            "title": "Conditional Style",
            "notFoundContent": "Multiple values can be added (enter the content and press enter to complete the addition)"
          },
          "header": {
            "operator": "Operator",
            "value": "Value",
            "color": {
              "title": "Color",
              "background": "Background",
              "text": "Text"
            },
            "range": {
              "title": "Applied range",
              "cell": "Cell",
              "row": "Row"
            },
            "action": "Action"
          }
        },
        "visualMap": {
          "title": "Visual Map",
          "show": "Show Visual Map",
          "orient": "Orient",
          "align": "Align",
          "itemWidth": "Width",
          "itemHeight": "Height",
          "startColor": "Start Color",
          "endColor": "End Color"
        },
        "margin": {
          "title": "Margin",
          "left": "Left Margin",
          "right": "Right Margin",
          "bottom": "Bottom Margin",
          "top": "Top Margin",
          "containLabel": "Contain Label"
        },
        "lineStyles": {
          "solid": "Solid",
          "dashed": "Dashed",
          "dotted": "Dotted"
        },
        "nameLocation": {
          "title": "Name Location",
          "start": "Start",
          "center": "Center",
          "end": "End"
        },
        "legendType": {
          "title": "Type",
          "plain": "Plain",
          "scroll": "Scroll"
        },
        "fontFamily": {
          "default": "Default",
          "microsoftYaHei": "Microsoft YaHei",
          "simSun": "SimSun",
          "simHei": "SimHei",
          "helveticaNeue": "Helvetica Neue",
          "helvetica": "Helvetica",
          "arial": "Arial",
          "sansSerif": "sans-serif"
        },
        "fontWeight": {
          "normal": "Normal",
          "bold": "Bold",
          "bolder": "Bolder",
          "lighter": "Lighter",
          "100": "100",
          "200": "200",
          "300": "300",
          "400": "400",
          "500": "500",
          "600": "600",
          "700": "700",
          "800": "800",
          "900": "900"
        },
        "fontStyle": {
          "normal": "Normal",
          "italic": "Italic",
          "oblique": "Oblique"
        },
        "lineHeight": {
          "default": "Default Line Height"
        },
        "position": {
          "title": "Position",
          "auto": "Auto",
          "right": "Right",
          "left": "Left",
          "top": "Top",
          "bottom": "Bottom",
          "inside": "Inside",
          "insideLeft": "Inside Left",
          "insideRight": "Inside Right",
          "insideTop": "Inside Top",
          "insideBottom": "Inside Bottom",
          "insideTopLeft": "Inside Top Left",
          "insideBottomLeft": "Inside Bottom Left",
          "insideTopRight": "Inside Top Right",
          "insideBottomRight": "Inside Bottom Right",
          "leftTop": "Left Top",
          "leftBottom": "Left Bottom",
          "rightTop": "Right Top",
          "rightBottom": "Right Bottom"
        },
        "dataZoomSlider": {
          "showZoomSlider": "Show Zoom Slider",
          "zoomSliderColor": "Zoom Slider Color",
          "usePercentage": "Use Percentage",
          "zoomStartPercentage": "Zoom Slider Start Percentage",
          "zoomEndPercentage": "Zoom Slider End Percentage",
          "zoomStartIndex": "Zoom Slider Start Index",
          "zoomEndIndex": "Zoom Slider End Index"
        }
      },
      "data": {
        "column": "Column",
        "row": "Row",
        "dimension": "Dimension",
        "metrics": "Metric",
        "mixed": "Columns",
        "filter": "Filter",
        "colorize": "Color",
        "colorRange": "Range Color",
        "info": "Info",
        "sort": "Sort",
        "size": "Size",
        "drop": "Drag some data fields here",
        "dropCount": "Drag {{count}} fields here at least",
        "AGG_DATE_YEAR": "Year",
        "AGG_DATE_QUARTER": "Quarter",
        "AGG_DATE_MONTH": "Month",
        "AGG_DATE_WEEK": "Week",
        "AGG_DATE_DAY": "Day",
        "drillable": "Drillable",
        "actions": {
          "sort": {
            "title": "Sort",
            "none": "Default",
            "asc": "Ascending",
            "desc": "Descending",
            "customize": "Customized"
          },
          "format": {
            "title": "Format Setting",
            "default": "Default",
            "numeric": "Numeric",
            "currency": "Currency",
            "percentage": "Percentage",
            "scientific": "Scientific",
            "decimalPlace": "Decimal Places",
            "unit": "Unit",
            "useSeparator": "Use Separator",
            "prefix": "Prefix",
            "suffix": "Suffix"
          },
          "aggregation": "Aggregation",
          "aggregationlimit": "Aggregation",
          "alias": {
            "title": "Field Setting",
            "name": "Alias Name",
            "description": "Name Description",
            "fieldName": "Field Name"
          },
          "filter": {
            "title": "Filter"
          },
          "color": {
            "enable": "Enable Color",
            "start": "Start Color",
            "end": "End Color"
          }
        },
        "axis": {
          "y": {
            "left": "Left Metric",
            "right": "Right Metric"
          }
        },
        "enum": {
          "actionType": {
            "sortable": "Sortable",
            "alias": "Alias",
            "format": "Format",
            "aggregate": "Aggregate",
            "aggregateLimit": "Aggregate",
            "filter": "Filter",
            "categoryFilter": "Category Filter",
            "colorize": "Colorize",
            "colorRange": "Colorize",
            "colorSingle": "Colorize",
            "size": "Size",
            "chooseTheme": "Choose Theme",
            "dateLevel": "Date Level"
          }
        }
      },
      "setting": {
        "select": "Select ...",
        "displayCount": "Display Count",
        "enableCache": "Enable Cache",
        "cacheExpire": "Cache Expire Time(sec)",
        "autoLoad": "Auto Load",
        "enableRaw": "Raw Data",
        "reference": {
          "enableMarkLine": "Enable Mark Line",
          "enableMarkArea": "Enable Mark Area",
          "markLine": "Reference Line",
          "markArea": "Reference Area",
          "valueType": "Value Type",
          "constantValue": "Constant Value",
          "metric": "Reference Metric",
          "startValueType": "Start Value Type",
          "startConstantValue": "Start Constant Value",
          "startMetric": "Start Reference Metric",
          "endValueType": "End Value Type",
          "endConstantValue": "End Constant Value",
          "endMetric": "End Reference Metric",
          "font": "Font",
          "showLabel": "Show",
          "position": {
            "title": "Position",
            "start": "Start",
            "middle": "Middle",
            "end": "End"
          },
          "lineStyle": "Line Style",
          "opacity": "Opacity",
          "backgroundColor": "Background Color",
          "borderStyle": "Border Style",
          "constant": "Constant",
          "avg": "Avg",
          "max": "Max",
          "min": "Min"
        },
        "paging": {
          "title": "Common",
          "pageSize": "Limit"
        }
      },
      "interaction": {
        "drillThrough": {
          "title": "Drill Through",
          "rule": {
            "title": "Rule",
            "tip": "Drill through only support jump to url",
            "addRule": "+ Add New",
            "inputUrl": "Please input url",
            "header": {
              "name": "Name",
              "category": "Category",
              "open": "Open",
              "relation": "Relation",
              "operation": "Operation",
              "event": "Event"
            },
            "event": {
              "title": "Event",
              "left": "Left",
              "right": "Right"
            },
            "category": {
              "title": "Categroy",
              "jumpToChart": "Jump to Chart",
              "jumpToDashboard": "Jump to Dashboard",
              "jumpToUrl": "Jump to URL"
            },
            "action": {
              "title": "Open",
              "redirect": "Redirect",
              "window": "Open New",
              "dialog": "Open Dialog"
            },
            "reference": {
              "title": "Reference View"
            },
            "relation": {
              "setting": "Field Relation Setting",
              "title": "Field Relation",
              "auto": "Auto",
              "customize": "Customize",
              "type": "Type",
              "source": "Source Field/Variable",
              "target": "Target Field/Variable",
              "addRelation": "+ Add",
              "field": "Field",
              "variable": "Variable",
              "controller": "Controller"
            },
            "operation": {
              "delete": "Delete"
            }
          }
        },
        "viewDetail": {
          "title": "View Detail",
          "event": "Interaction Event",
          "leftClick": "Left Click",
          "rightClick": "Right Click",
          "field": "Selected Fields",
          "all": "All",
          "customize": "Customize",
          "summary": "Summary",
          "details": "Details"
        }
      },
      "present": {
        "graph": "Graph",
        "raw": "Raw",
        "sql": "SQL",
        "needMore": "At least need {{num}} {{type}}(s)"
      },
      "graph": {
        "names": {
          "table": "Table",
          "areaChart": "Area Chart",
          "barChart": "Bar Chart",
          "funnelChart": "Funnel Chart",
          "gaugeChart": "Gauge Chart",
          "lineChart": "Line Chart",
          "outlineMap": "Outline Map",
          "pieChart": "Pie Chart",
          "radarChart": "Radar Chart",
          "richText": "Rich Text",
          "scatterChart": "Scatter Chart",
          "clusterBarChart": "Cluster Bar Chart",
          "clusterColumnChart": "Cluster Column Chart",
          "doughnutChart": "Doughnut Chart",
          "normalOutlineMap": "Normal Outline Map",
          "percentageStackBarChart": "Percentage Stack Bar Chart",
          "percentageStackColumnChart": "Percentage Stack Column Chart",
          "pivotSheet": "Pivot Table",
          "roseChart": "Rose Chart",
          "scatterOutlineMap": "Scatter Outline Map",
          "scoreChart": "Score Chart",
          "stackAreaChart": "Stack Area Chart",
          "stackBarChart": "Stack Bar Chart",
          "stackColumnChart": "Stack Column Chart",
          "waterfallChart": "Waterfall Chart",
          "wordCloudChart": "Word Cloud"
        },
        "group": "Dimensions",
        "aggregate": "Measures",
        "onlyAllow": "{{type}} Only Allow {{num}}",
        "allowRange": "{{type}} Allow Range {{start}} to {{end}}",
        "confirm": "Please confirm switch to {{name}} chart that will clear all data fields",
        "ok": "OK",
        "cancel": "Cancel",
        "number": "No.",
        "summary": "Summary",
        "richText": {
          "bold": "Bold",
          "italic": "Italic",
          "underline": "Underline",
          "strike": "Strike",
          "indent": "Indent",
          "indentUp": "Indent Up",
          "ordered": "Ordered",
          "list": "List",
          "blockquote": "Blockquote",
          "codeBlock": "Code Block",
          "link": "Link",
          "image": "Image",
          "clean": "Clean",
          "more": "More",
          "families": "Families",
          "fontSize": "Font Size",
          "background": "Background",
          "color": "Color",
          "align": "Align"
        }
      },
      "drill": {
        "showNextLevel": "Show Next Level",
        "expandNextLevel": "Expand to Next Level",
        "selectDrillOn": "\"Click to drill down\" is on",
        "selectDrillOff": "Turn on \"Click to drill down\"",
        "rollUp": "Roll Up",
        "drillThrough": "Drill Through",
        "viewData": "View Data",
        "crossFiltering": "Cross Filtering"
      }
    },
    "action": {
      "common": {
        "exportForExcel": "Export Excel",
        "confirm": "Please Confirm",
        "ok": "OK",
        "cancel": "Cancel",
        "save": "Save"
      },
      "downloadTaskSuccess": "Download task created successfully",
      "edit": "Edit",
      "run": "Run",
      "publish": "Publish",
      "unpublish": "Unpublish",
      "published": "Published",
      "unpublished": "Unpublished",
      "archived": "Archived",
      "play": "Play",
      "syncData": "Sync Data",
      "addToDash": "Add To Dashboard",
      "addToStory": "Add To Storyboard",
      "share": {
        "link": "Link",
        "password": "Password",
        "link_password": "Link Password",
        "expireDate": "Expire Date",
        "enablePassword": "Password",
        "generateLink": "Generate Link",
        "shareLink": "Share Management",
        "exportData": "Export Excel",
        "exportPDF": "Export PDF",
        "exportPicture": "Export Picture",
        "exportTpl": "Export Template",
        "NONE": "None",
        "CODE": "Code",
        "LOGIN": "Login",
        "verificationMethod": "Verification method",
        "dataPermission": "Data permission",
        "loginUser": "User login",
        "shareUser": "User share",
        "userOrRole": "Assign roles/members",
        "selectRole": "Select role",
        "selectUser": "Select members",
        "save": "Save"
      },
      "shareList": {
        "shareList": "Share link list",
        "shortLink": "Short link",
        "type": "Type",
        "expireDate": "Expiration",
        "operate": "Operate",
        "copy": "Copy",
        "copySuccess": "Copy success",
        "delete": "Delete",
        "addLink": "Add a link",
        "deleteError": "Failed to delete",
        "sureDelete": "Confirm to delete?",
        "noDataTip": "No link yet, click on the top right corner to add",
        "Permanent": "Permanent"
      }
    },
    "board": {
      "action": {
        "dataChart": "DataChart",
        "importExistingDataCharts": "Import Existing DataCharts",
        "createDataChartInBoard": "Create DataChart In Board",
        "searchValue": "Search keywords",
        "media": "Media",
        "image": "Image",
        "richText": "Rich Text",
        "timer": "Timer",
        "iframe": "IFrame",
        "video": "Video",
        "container": "Container",
        "tab": "Tab",
        "carousel": "Carousel",
        "controller": "Controller",
        "toTop": "Move To Top",
        "toBottom": "Move To Bottom",
        "undo": "Undo",
        "redo": "Redo",
        "delete": "Delete",
        "copy": "Copy",
        "paste": "Paste",
        "deviceSwitch": "Device Switch",
        "allowOverlap": "Allow Overlap",
        "forbidOverlap": "Forbid Overlap",
        "multiSelect": "MultiSelect",
        "zoomIn": "Zoom Out",
        "zoomOut": "Zoom In",
        "widgetList": "Widget List",
        "group": "Group",
        "unGroup": "Ungroup"
      },
      "controlTypes": {
        "common": "Common",
        "date": "Date",
        "numeric": "Numeric",
        "button": "Button"
      },
      "setting": {
        "interaction": "Interaction",
        "setting": "Setting",
        "board": "Board",
        "widget": "Widget",
        "widgetList": "Widget List",
        "title": "Title",
        "align": "Align",
        "showTitle": "Show Title",
        "position": "Position",
        "xAxis": "x-Axis",
        "yAxis": "y-Axis",
        "size": "Size",
        "px": "px",
        "width": "Width",
        "height": "Height",
        "font": "Font",
        "background": "Background",
        "color": "Color",
        "image": "Image",
        "uploadTip": "Click to Upload",
        "padding": "Padding",
        "paddingTop": "Padding Top",
        "paddingRight": "Padding Right",
        "paddingBottom": "Padding Bottom",
        "paddingLeft": "Padding Left",
        "border": "Border",
        "style": "Style",
        "radius": "Radius",
        "autoUpdate": "Auto Refresh",
        "openAutoUpdate": "Enable Auto Refresh",
        "frequency": "Frequency (s)",
        "baseProperty": "Base Property",
        "marginTB": "Margin-TB",
        "marginLR": "Margin-LR",
        "paddingTB": "Padding-TB",
        "paddingLR": "Padding-LR",
        "rowHeight": "Row Height",
        "scaleMode": "Scale Mode",
        "queryMode": "Query Mode",
        "openInitQuery": "Open Init Query",
        "cutIn": "Cut In",
        "cutOut": "Cut Out",
        "speed": "Speed",
        "autoPlay": "Auto Play",
        "duration": "Duration (s) ",
        "delPagesTip": "Confirm to delete all selected story pages?",
        "delPageTip": "Confirm to delete this story page?",
        "enterHere": "Enter here",
        "storyName": "Name",
        "storyDescription": "Description",
        "format": "Format",
        "interval": "Interval",
        "requiredWidgetName": "Widget name cannot be empty, please input a name",
        "duplicateWidgetName": "Widget name is duplicate with others, please change another one."
      }
    },
    "widget": {
      "widget": "Widget",
      "associatedWidget": "Associated Widgets",
      "widgetName": "Widget Name",
      "widgetType": "Widget Type",
      "type": {
        "chart": "Chart",
        "widgetChart": "Private Chart",
        "dataChart": "Public Chart",
        "media": "Media",
        "container": "Container",
        "controller": "Controller",
        "queryBtn": "Query",
        "resetBtn": "Reset",
        "image": "Image",
        "richText": "Rich Text",
        "timer": "Timer",
        "iframe": "IFrame",
        "video": "Video",
        "tab": "Tab"
      },
      "action": {
        "refresh": "Refresh",
        "fullScreen": "FullScreen",
        "exitFullScreen": "Exit FullScreen",
        "lock": "Lock",
        "unlock": "Unlock",
        "edit": "Edit",
        "delete": "Delete",
        "confirmDel": "Confirm Delete",
        "ContainerConfirmDel": "The components within this component will also be deleted, confirm to delete them?",
        "info": "Info",
        "makeLinkage": "Set Linkage",
        "closeLinkage": "Close Linkage",
        "makeJump": "Set Jump",
        "closeJump": "Close Jump",
        "group": "Group",
        "unGroup": "Ungroup"
      },
      "tips": {
        "unlock": "Locking drag and click to unlock",
        "waiting": "Waiting for loadData",
        "cancelLinkage": "Cancel Linkage",
        "canLinkage": "Click the Widget to link",
        "dragChartFromLeftPanel": "Please drag one widget from left panel and drop here"
      }
    },
    "linkage": {
      "title": "Linkage settings",
      "dataSource": "Data source",
      "associatedWidgets": "Associated Widgets",
      "associatedFields": "Associated Fields",
      "selectTriggers": "Select the trigger field",
      "selectLinker": "Select linkage field",
      "linkageError": "The linkage chart has been deleted, please reconfigure"
    },
    "jump": {
      "title": "Jump Settings",
      "mode": "Jump Mode",
      "target": "Target",
      "INTERNAL": "Dashboard/DataChart",
      "URL": "URL",
      "parameters": "Parameters",
      "controller": "Associated Controllers",
      "associatedFields": "Associated Fields",
      "jumpError": "The jump target has been invalidated or deleted, please reconfigure"
    },
    "associate": {
      "title": "Please associate fields/variables",
      "field": "Field",
      "variable": "Variable",
      "noValueErr": "Please associate fields or variables",
      "valueErr": "Please select a field or two variables"
    },
    "sidebar": {
      "folder": "Folder",
      "presentation": "Presentation",
      "folders": {
        "folderTitle": "Dashboards & Datacharts",
        "dashboard": "Create Dashboard",
        "dataChart": "Create Datachart",
        "folder": "Create Folder",
        "template": "Import Template",
        "recycle": "Recycle",
        "open": "Open",
        "close": "Close",
        "startAnalysis": "Start Analysis"
      },
      "storyboards": {
        "title": "Storyboards",
        "add": "Create Storyboard",
        "addFolder": "Create Folder",
        "recycle": "Recycle"
      }
    },
    "lineOptions": {
      "none": "None",
      "solid": "Solid",
      "dashed": "Dashed",
      "dotted": "Dotted",
      "double": "Double",
      "hidden": "Hidden",
      "ridge": "Ridge",
      "groove": "Groove",
      "inset": "Inset",
      "outset": "Outset"
    },
    "scaleMode": {
      "scaleWidth": "Scale Width",
      "scaleHeight": "Scale Height",
      "scaleFull": "Scale Full",
      "noScale": "No Scale"
    },
    "tips": {
      "noStartValue": "Input Start Value",
      "noEndValue": "Input End Value",
      "endGTStartErr": "End Value should be greater than Start Value ",
      "hasChartConfig": "The chart config already exist, it will overwrite after you enable board config."
    },
    "control": {
      "title": "Control Title",
      "valueConfig": "Value Config",
      "selectView": "Select View",
      "selectViewField": "Select View Field",
      "selectDefaultValue": "Select Default Value",
      "defaultValue": "Default Value",
      "visibility": "Visibility",
      "sqlOperator": "Sql Operator",
      "dateType": "Date Type",
      "step": "Step",
      "showMark": "Show Mark",
      "common": "General",
      "custom": "Customize",
      "optionLabelField": "Option Label Field",
      "value": "Value",
      "label": "Label",
      "action": "Action",
      "unsetDefault": "Unset Default",
      "setDefault": "Set Default",
      "delete": "Delete",
      "populate": "Populate From Field Values",
      "parentFields": "Select Parent Field",
      "parentFieldsHierarchy": "Select Fields by Hierarchy",
      "treeBuildingMethod": "Building Method",
      "byParent": "By Parent",
      "byParentTip": "Automatically build a tree by specifying a value field (ID) and a parent field (Parent ID); for example: folder tree",
      "byHierarchy": "By Hierarchy",
      "byHierarchyTip": "Build a tree from multiple dimension fields with natural hierarchical attributes; for example: country, province, city"
    },
    "date": {
      "year": "Year",
      "quarter": "Quarter",
      "month": "Month",
      "week": "Week",
      "date": "Date",
      "dateTime": "Date Time"
    },
    "saveForm": {
      "name": "Name",
      "description": "Description",
      "boardType": {
        "label": "Layout",
        "auto": "Auto",
        "free": "Free",
        "autoTips": "Auto: Responsive, fluid layout",
        "freeTips": "Free: Precise, fixed layout",
        "requiredMessage": "Select a Layout Type"
      },
      "template": {
        "label": "File",
        "requiredMessage": "Select a Template file"
      },
      "parent": "Parent",
      "root": "Root",
      "vizType": {
        "datachart": "Datachart",
        "dashboard": "Dashboard",
        "template": "From Template",
        "folder": "Folder",
        "storyboard": "Storyboard"
      }
    },
    "main": {
      "publishSuccess": "Publish success",
      "unpublishSuccess": "Unpublish success",
      "empty": "Select vizs in the sidebar",
      "closeOther": "Close Other Tabs",
      "closeAll": "Close All Tabs"
    }
  },
  "view": {
    "loading": "Loading...",
    "selectSource": "You must select a source",
    "empty": "Select views in the sidebar",
    "resultEmpty1": "Click ",
    "resultEmpty2": " button to execute, the results will be displayed here",
    "errorTitle": "Error occurred",
    "sqlRequired": "SQL statement cannot be empty",
    "sqlRunWraning": "SQL parsing failed, welcome to submit an issue to help us improve. ",
    "detail": "Click here for details",
    "warningDescription": "Datart uses calcite to parse SQL statements by default; calcite has an awesome parser, but it still can't parse all the grammars of all databases. When a parsing exception occurs, datart will still send the SQL statement to the database for execution after necessary processing. If the execution is successful, we will think that the parser needs to be improved for the syntax of the SQL statement. In this case, datart will show this warning message, which is convenient for users to submit the exceptional parsing statements to github or gitee issue, and help us improve the parser.",
    "close": "Close",
    "computedFieldNameExistWarning": "Computed field name has already exist. Please choose another one.",
    "tabs": {
      "discard": "Discard",
      "cancel": "Cancel",
      "execute": "Execute",
      "warning": "There are unexecuted changes, still execute?",
      "closeOther": "Close Other Tabs",
      "closeAll": "Close All Tabs"
    },
    "editor": {
      "startAnalysis": "Start Analysis",
      "folder": "Folder",
      "source": "Select Source",
      "run": "Run",
      "runSelection": "Run Selection",
      "runWinTip": "Win: [Ctrl + Enter]",
      "runMacTip": "Mac: [Command + Enter]",
      "beautify": "Beautify",
      "save": "Save",
      "saveWinTip": "Win: [Ctrl + S]",
      "saveMacTip": "Mac: [Command + S]",
      "info": "Info",
      "saveAs": "Save As",
      "saveFragment": "Save Fragment",
      "readonlyTip": "Not editable in recycle"
    },
    "properties": {
      "reference": "Source Reference",
      "variable": "Variables",
      "model": "Data Model",
      "columnPermissions": "Column Permissions"
    },
    "resource": {
      "title": "Source info",
      "search": "Search database / table / column",
      "sortType": "Sort",
      "byName": "By Name",
      "byField": "By Field"
    },
    "variable": {
      "title": "Variables",
      "formTitle": "Variable",
      "add": "Create variable",
      "prefix": "[Public]",
      "suffix": "duplicate"
    },
    "model": {
      "type": "Type",
      "rename": "Rename",
      "delete": "Delete",
      "typeAndCategory": "Type & Category",
      "permission": "Column Permissions",
      "newHierarchy": "New Hierarchy",
      "addToHierarchy": "Add To Hierarchy",
      "hierarchyName": "Hierarchy Name",
      "createComputedFields": "Create Computed Field",
      "duplicateName": "Name already exists!",
      "deleteSure": "You sure you want to delete it?",
      "edit": "Edit"
    },
    "columnPermission": {
      "title": "Column permissions",
      "search": "Search role keywords",
      "partial": "Partial",
      "none": "None",
      "all": "All"
    },
    "sidebar": {
      "title": "Views",
      "addView": "Create View",
      "addFolder": "Create Folder",
      "parent": "Parent",
      "recycle": "Recycle",
      "open": "Open",
      "close": "Close"
    },
    "saveForm": {
      "title": "View",
      "name": "Name",
      "folder": "Directory",
      "root": "Root",
      "advanced": "Advanced",
      "concurrencyControl": "Concurrency control",
      "concurrencyControlMode": "Mode",
      "dirtyread": "Dirty read",
      "fastfailover": "Fast failover",
      "cache": "Cache",
      "cacheExpires": "Expires(s)",
      "expensiveQuery": "This is an expensive query"
    },
    "schemaTable": {
      "category": "Category",
      "type": "Type",
      "typeAndCategory": "Type & Category"
    },
    "structView": {
      "title": "Choose a view type",
      "STRUCT": "Table View",
      "SQL": "SQL View",
      "STRUCT_DESC": "Create view by configuring table relationships",
      "SQL_DESC": "Create view by SQL",
      "file": "File",
      "main": "Main: ",
      "join": "Join: ",
      "selectJoinColumn": "Relations",
      "addJoin": "Add join table",
      "run": "Run",
      "runStep": "Run step",
      "searchTable": "Search Tables",
      "searchSource": "Search Sources",
      "selectTable": "Select a table",
      "all": "All",
      "selectField": "Select a column",
      "RIGHT": "Right Join",
      "LEFT": "Left Join",
      "INNER": "Inner Join"
    }
  },
  "source": {
    "source": "Source",
    "testSuccess": "Test connection succeeded",
    "createSuccess": "Source created successfully",
    "archived": "Archived ",
    "noPermission": "You do not have permission to access this page",
    "creatView": "Create View",
    "syncDatabase": "Sync Database",
    "syncDatabaseSchemaSuccess": "Sync database schema successfully",
    "lastUpdateTime": "Last Update Time",
    "sidebar": {
      "title": "Sources",
      "add": "Create Source",
      "recycle": "Recycle",
      "addFolder": "Create Folder",
      "parent": "Parent",
      "success": "Success",
      "delete": "Delete",
      "moveToTrash": "Move to recycle bin",
      "restoredSuccess": "Restored successfully",
      "restore": "Restore",
      "sureToDelete": "Confirm delete?",
      "addSuccess": "Add Success",
      "open": "Open",
      "close": "Close"
    },
    "form": {
      "name": "Name",
      "type": "Type",
      "test": "Test Connection",
      "file": "File",
      "selectFile": "Select File",
      "addProperty": "Add Property",
      "editProperty": "Edit Property",
      "addConfig": "Add Configuration",
      "editConfig": "Edit Configuration",
      "duplicate": "Duplicate Key",
      "duplicateName": "Duplicate Name"
    },
    "saveForm": {
      "name": "Name",
      "folder": "Folder",
      "root": "Root",
      "title": "Sources"
    }
  },
  "schedule": {
    "saveForm": {
      "name": "Name",
      "folder": "Folder",
      "root": "Root",
      "title": "Schedule"
    },
    "constants": {
      "email": "Email",
      "weChat": "WeChat",
      "picture": "Picture",
      "taskExecution": "Task execution",
      "configurationAnalysis": "Configure the parsing",
      "getData": "Data collection",
      "send": "Send"
    },
    "sidebar": {
      "index": {
        "addFolder": "Add Folder",
        "addSuccess": "Add Success",
        "scheduledTaskList": "Scheduled task list",
        "newTimedTask": "Create scheduled task",
        "recycle": "Recycle",
        "open": "Open",
        "close": "Close"
      },
      "scheduleList": {
        "parent": "Parent",
        "success": "Success",
        "delete": "Delete",
        "moveToTrash": "Move to recycle bin",
        "successStarted": "Successfully started",
        "successStop": "Stopped successfully",
        "successImmediately": "Executed successfully immediately",
        "start": "Start",
        "stop": "Stop",
        "executeItNow": "Are you sure to execute it now?",
        "executeImmediately": "Execute immediately"
      }
    },
    "editor": {
      "index": {
        "tickToSendContent": "Please tick to send content",
        "addSuccess": "Added successfully",
        "saveSuccess": "Saved successfully",
        "restoredSuccess": "Restored successfully",
        "success": "Success",
        "moveToTrash": "Move to recycle bin",
        "delete": "Delete",
        "newTimedTask": "New scheduled task",
        "restore": "Restore",
        "sureToDelete": "Confirm delete?",
        "allowModificationAfterStopping": "Allow modification after stopping",
        "save": "Save",
        "allowMoveAfterStopping": "Allow moving to the recycle bin after stopping",
        "sureMoveRecycleBin": "Are you sure to move to the recycle bin?",
        "basicSettings": "Basic settings",
        "emailSetting": "Email settings",
        "enterpriseWeChatSettings": "Enterprise WeChat Settings",
        "sendContentSettings": "Send content settings",
        "parent": "Parent"
      },
      "weChatSettingForm": {
        "RobotWebhookAddress": "Robot webhook address",
        "RobotWebhookAddressIsRequired": "Robot webhook address is required",
        "fileType": "File type",
        "picWidth": "Width",
        "px": "px"
      },
      "scheduleErrorLog": {
        "index": {
          "startTime": "Start",
          "endTime": "End",
          "logPhase": "Log phase",
          "executionInformation": "Execution information",
          "success": "Success",
          "log": "Log"
        }
      },
      "emailSettingForm": {
        "commonRichText": {
          "pleaseEnter": "Please enter"
        },
        "index": {
          "CC": "CC",
          "theme": "Theme",
          "subjectIsRequired": "Theme is required",
          "fileType": "File type",
          "picWidth": "Width",
          "px": "px",
          "recipient": "Recipient",
          "recipientIsRequired": "Recipient is required",
          "bcc": "BCC",
          "contentOfEmail": "Content of email"
        },
        "mailTagFormItem": {
          "placeholder": "Enter email address or name keyword search..."
        }
      },
      "basicBaseForm": {
        "index": {
          "nameAlreadyExists": "Name already exists",
          "name": "Name",
          "nameRequired": "Name is required",
          "type": "Type",
          "effectiveTimeRange": "Effective time range"
        },
        "executeFormItem": {
          "per": "Each",
          "of": "",
          "executionTimeSetting": "Execution time setting",
          "expressionIsRequired": "Expression is required",
          "pleaseEnterCronExpression": "Please enter cron expression",
          "manualInput": "Manual input"
        }
      }
    }
  },
  "member": {
    "memberDetail": {
      "titleAdd": "Add Member",
      "titleDetail": "Member detail",
      "grantOwner": "Grant as organization owner",
      "revokeOwner": "Revoke owner",
      "remove": "Remove",
      "removeConfirm": "Remove confirm",
      "removeSuccess": "Remove successful",
      "delete": "Delete",
      "deleteConfirm": "Delete confirm",
      "deleteSuccess": "Delete successful",
      "grantSuccess": "Grant successful",
      "revokeSuccess": "Revoke successful",
      "username": "Username",
      "email": "Email",
      "password": "Password",
      "changePassword": "Click to change password",
      "name": "Name",
      "description": "Description",
      "roles": "Roles",
      "assignRole": "Assign roles",
      "createSuccess": "Member created successfully"
    },
    "roleDetail": {
      "role": "Role",
      "createSuccess": "Role created successfully",
      "roleName": "Name",
      "description": "Description",
      "relatedMember": "Related member",
      "addMember": "Add member",
      "deleteAll": "Delete all",
      "searchMember": "Search member",
      "username": "Username",
      "email": "Email",
      "name": "Name",
      "remove": "Remove"
    },
    "form": {
      "email": "Email",
      "search": "Search or paste the emails of invited members",
      "needConfirm": "Need email confirmation",
      "password": "Password",
      "username": "Username",
      "name": "Name",
      "description": "Description",
      "roles": "Roles"
    },
    "sidebar": {
      "member": "Members",
      "role": "Roles",
      "memberTitle": "Members",
      "inviteMember": "Invite member",
      "inviteSuccess": "The invitation email has been sent successfully",
      "invalidEmail": "Invalid email addresses",
      "addMember": "Add Member",
      "roleTitle": "Roles",
      "addRole": "Create role"
    }
  },
  "permission": {
    "empty1": "Select ",
    "emptyResource": "resources",
    "emptySubject": "roles or members",
    "empty2": " in the sidebar",
    "allResources": "All resources",
    "folder": "Folder",
    "presentation": "Presentation",
    "search": "Search keywords",
    "searchResources": "Search resource keywords",
    "member": "Member",
    "role": "Role",
    "modulePermission": "Module Permission",
    "modulePermissionDesc": "You can only access the module after enabling the module permission",
    "resourceDetail": "Resource detail",
    "createStoryboard": "Create storyboard",
    "resourceName": "Resource Name",
    "subjectName": "Subject Name",
    "privileges": "Privileges",
    "add": "Create ",
    "viewpoint": {
      "subject": "Subject view",
      "resource": "Resource view"
    },
    "module": {
      "source": "Source",
      "view": "View",
      "viz": "Viz",
      "schedule": "Schedule"
    },
    "modulePermissionLabel": {
      "Enable": "Enable",
      "Disable": "Disable"
    },
    "createPermissionLabel": {
      "Create": "Enable",
      "Disable": "Disable"
    },
    "privilegeLabel": {
      "viz": {
        "0": "View",
        "1": "Download",
        "2": "Share",
        "3": "Manage"
      },
      "vizfolder": {
        "0": "View",
        "1": "Download",
        "2": "Share",
        "3": "Manage"
      },
      "vizstoryboard": {
        "0": "View",
        "1": "Share",
        "2": "Manage"
      },
      "view": {
        "0": "Access",
        "1": "Manage"
      },
      "source": {
        "0": "Access",
        "1": "Manage"
      },
      "schedule": {
        "0": "Manage"
      }
    }
  },
  "variable": {
    "title": "Public variables",
    "public": "Public variables",
    "name": "Name",
    "label": "Label",
    "type": "Type",
    "valueType": "Value type",
    "permission": {
      "label": "Permission",
      "hidden": "Hidden",
      "readonly": "Readonly",
      "editable": "Editable"
    },
    "defaultValue": "Default value",
    "expression": "Use expression default value",
    "duplicateName": "Duplicate Name",
    "related": "Related roles & members",
    "deleteAllConfirm": "Delete confirm",
    "deleteAll": "Delete all",
    "enterToAdd": "Enter to add",
    "enterExpression": "Enter expression",
    "relatedRole": "Related roles",
    "relatedMember": "Related members",
    "useDefaultValue": "Use variable default value",
    "value": "Value",
    "variableType": {
      "query": "Query",
      "permission": "Permission"
    },
    "variableValueType": {
      "string": "String",
      "numeric": "Number",
      "date": "Date",
      "fragment": "Expression"
    }
  },
  "orgSetting": {
    "info": "Info",
    "avatar": "Avatar",
    "clickToUpload": "Click to upload",
    "name": "Name",
    "description": "Description",
    "deleteOrg": "Delete Organization",
    "deleteOrgDesc": "When deleting an organization, all resources, members, roles, and other configurations belonging to the organization will be permanently deleted. Please operate with caution.",
    "cancel": "Cancel",
    "delete": "Delete",
    "enterOrgName": "Enter organization name to delete"
  },
  "confirmInvite": {
    "join": "Join successful",
    "confirming": "Confirming"
  },
  "authorization": {
    "authenticating": "Authenticating",
    "authenticatingDesc": "In progress, please wait for the completion of authentication",
    "activating": "Activating",
    "activatingDesc": "In progress, please wait for the completion of activation",
    "activatingError": "Activation Error",
    "error": "Authentication Error",
    "errorDesc": "Something went wrong, please check and try again"
  },
  "notfound": {
    "title": "Page not found"
  },
  "share": {
    "common": {
      "confirm": "Confirm",
      "ok": "OK",
      "cancel": "Cancel"
    },
    "modal": {
      "password": "Password",
      "enterPassword": "Enter password"
    }
  },
  "components": {
    "colorPicker": {
      "more": "More",
      "ok": "OK",
      "cancel": "Cancel"
    },
    "listTitle": {
      "search": "Search",
      "searchValue": "Search keywords"
    },
    "saveToDashOrStory": {
      "createDashboard": "Create Dashboard",
      "searchValue": "Search keywords",
      "haveCharts": "The chart already exists in the dashboard and cannot be added repeatedly"
    }
  }
}
