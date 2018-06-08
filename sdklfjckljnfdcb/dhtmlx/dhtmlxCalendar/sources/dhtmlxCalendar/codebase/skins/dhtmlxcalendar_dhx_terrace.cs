/*
Product Name: dhtmlxCalendar 
Version: 5.1.0 
Edition: Standard 
License: content of this file is covered by DHTMLX Commercial or enterpri. Usage outside GPL terms is prohibited. To obtain Commercial or Enterprise license contact sales@dhtmlx.com
Copyright UAB Dinamenta http://www.dhtmlx.com
*/

/*
	skin detected: dhx_terrace
	include extra file: skins/dhx_terrace.less
*/

.dhtmlxcalendar_dhx_terrace {
	position: absolute;
	display: block;
	background-color: #ffffff;
	font-family: Arial, Helvetica;
	font-size: 13px;
	color: #333333;
}
.dhtmlxcalendar_dhx_terrace.dhtmlxcalendar_in_input {
	box-shadow: 0 0 6px rgba(0,0,0,0.25);
}
.dhtmlxcalendar_ifr {
	position: absolute;
	overflow: hidden;
	background-color: white;
}
.dhtmlxcalendar_dhx_terrace ul.dhtmlxcalendar_line {
	position: relative;
	display: block;
	clear: both;
	margin: 0px;
	padding: 0px;
	overflow: hidden;
	width: 225px;
	margin-left: 12px;
}
.dhtmlxcalendar_dhx_terrace ul.dhtmlxcalendar_line li {
	float: left;
	position: relative;
	list-style-type: none;
	list-style-image: none;
	text-align: center;
	vertical-align: middle;
	cursor: default;
	overflow: hidden;
	margin: 0px;
	padding: 0px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont {
	position: relative;
	display: block;
	width: 249px;
	margin: 0px;
	border-top: 1px solid #cccccc;
	border-left: 1px solid #cccccc;
	border-right: 1px solid #cccccc;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	overflow: hidden;
	color: #333333;
	-webkit-user-select: text;
	-khtml-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	-o-user-select: text;
	user-select: text;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr {
	width: 225px;
	height: 31px;
	line-height: 31px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow {
	position: absolute;
	top: 0px;
	width: 18px;
	height: 31px;
	color: inherit;
	text-align: center;
	background-position: center center;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_left {
	left: 4px;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_left.gif");
	opacity: 0.8;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=80);
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_left_hover {
	left: 4px;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_left.gif");
	opacity: 1;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_right {
	right: 4px;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_right.gif");
	opacity: 0.8;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=80);
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_right_hover {
	right: 4px;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_right.gif");
	opacity: 1;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr span.dhtmlxcalendar_month_label_month,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr span.dhtmlxcalendar_month_label_year {
	position: relative;
	font-weight: bold;
	color: inherit;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_today,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_clear {
	display: none;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_today {
	float: right;
	margin-right: 8px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_clear {
	float: right;
	margin-right: 74px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_today {
	float: right;
	margin-right: 8px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_clear {
	float: right;
	margin-right: 22px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_days_cont {
	position: relative;
	display: block;
	width: 249px;
	margin: 0px;
	border-left: 1px solid #cccccc;
	border-right: 1px solid #cccccc;
	-webkit-user-select: text;
	-khtml-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	-o-user-select: text;
	user-select: text;
	overflow: hidden;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line {
	height: 31px;
	border-bottom: 1px solid #cccccc;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li {
	width: 31px;
	height: 31px;
	line-height: 31px;
	margin-left: 1px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_first {
	margin-left: 1px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_day_weekday_cell {
	color: #d43f3a;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_day_weekday_cell_first {
	color: #d43f3a;
	margin-left: 1px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont {
	position: relative;
	display: block;
	width: 249px;
	margin: 0px;
	padding-bottom: 8px;
	border-left: 1px solid #cccccc;
	border-right: 1px solid #cccccc;
	border-bottom: 1px solid #cccccc;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	overflow: hidden;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line {
	margin-top: 1px;
	margin-left: 13px;
	height: 31px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li {
	color: #909090;
	border-radius: 3px;
	width: 31px;
	height: 31px;
	line-height: 31px;
	margin-right: 1px;
	overflow: visible;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li div.dhtmlxcalendar_label {
	width: 100%;
	height: 100%;
	text-align: center;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_weekend {
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_weekend_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_weekend_dis {
	color: #c4c4c4;
	background-color: #ededed;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_holiday,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_weekend_holiday {
	color: #d43f3a;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_holiday,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_weekend_holiday {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_holiday_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_weekend_holiday_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_holiday_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_weekend_holiday_dis {
	color: #d43f3a;
	background-color: #ededed;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_hover,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_weekend_hover,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_hover,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_weekend_hover {
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_holiday_hover,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_weekend_holiday_hover,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_holiday_hover,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_date_weekend_holiday_hover {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month {
	color: #333333;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_weekend {
	color: #d43f3a;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date {
	color: black;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_weekend {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_weekend_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_weekend_dis {
	color: #d43f3a;
	background-color: #ededed;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_holiday {
	color: #d43f3a;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_weekend_holiday {
	color: #d43f3a;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_holiday {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_weekend_holiday {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_holiday_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_weekend_holiday_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_holiday_dis,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_weekend_holiday_dis {
	color: #c4c4c4;
	background-color: #ededed;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_hover {
	color: #333333;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_weekend_hover {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_hover {
	color: #333333;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_weekend_hover {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_holiday_hover {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_weekend_holiday_hover {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_holiday_hover {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_cell_month_date_weekend_holiday_hover {
	color: #d43f3a;
	background-color: #fff3a1;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line div.dhtmlxcalendar_label.dhtmlxcalendar_label_title {
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_mark.gif");
	background-position: top right;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont {
	position: relative;
	display: block;
	width: 249px;
	height: 31px;
	margin-top: -4px;
	border-left: 1px solid #cccccc;
	border-right: 1px solid #cccccc;
	border-bottom: 1px solid #cccccc;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	background-color: #ffffff;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	overflow: hidden;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li {
	width: 225px;
	height: 27px;
	line-height: 25px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr {
	text-align: left;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li div.dhtmlxcalendar_time_img {
	position: absolute;
	left: 22px;
	top: 6px;
	width: 13px;
	height: 13px;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_clock.gif");
	background-position: center center;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_hours {
	margin-left: 42px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li div.dhtmlxcalendar_time_img {
	left: 75px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr {
	text-align: center;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_hours {
	margin-left: 0px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr div.dhtmlxcalendar_time_img,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_hours,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_minutes,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_colon {
	display: none;
}
.dhtmlxcalendar_dhx_terrace span.dhtmlxcalendar_label_colon {
	padding: 0px 4px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_cover {
	position: absolute;
	left: 1px;
	background-color: white;
	opacity: 0.5;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj {
	position: absolute;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_selector_obj_arrow {
	position: absolute;
	bottom: auto;
	top: 1px;
	left: 0px;
	width: 100%;
	height: 9px;
	overflow: hidden;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_selector_top.gif");
	background-position: top center;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours div.dhtmlxcalendar_selector_obj_arrow {
	background-position: -13px top;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 div.dhtmlxcalendar_selector_obj_arrow {
	background-position: -27px top;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_selector_obj_arrow {
	background-position: -52px top;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table {
	border-bottom: 1px solid #cccccc;
	border-top: 0px solid white;
	background-color: white;
	margin-top: 9px;
	box-shadow: 0 0 5px rgba(0,0,0,0.25);
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left {
	width: 17px;
	text-align: center;
	border-top: 1px solid #cccccc;
	border-left: 1px solid #cccccc;
	border-bottom: 0px solid white;
	border-right: 0px solid white;
	padding: 0px;
	margin: 0px;
	background-color: white;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_left.gif");
	background-position: center center;
	background-repeat: no-repeat;
	cursor: default;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left.dhtmlxcalendar_selector_cell_left_hover {
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_left.gif");
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle {
	cursor: default;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right {
	width: 17px;
	text-align: center;
	border-top: 1px solid #cccccc;
	border-right: 1px solid #cccccc;
	border-bottom: 0px solid white;
	border-left: 0px solid white;
	background-color: white;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_right.gif");
	background-position: center center;
	background-repeat: no-repeat;
	cursor: default;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right.dhtmlxcalendar_selector_cell_right_hover {
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_arrow_right.gif");
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul {
	display: block;
	clear: both;
	background-color: white;
	border-left: 1px solid #cccccc;
	margin: 0px;
	padding: 0px;
	overflow: hidden;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul li {
	float: left;
	font-family: Arial, Helvetica;
	font-size: 12px;
	color: #333333;
	list-style-type: none;
	list-style-image: none;
	text-align: center;
	vertical-align: middle;
	margin: 0px;
	border-right: 1px solid #cccccc;
	padding: 0px;
	background-color: white;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	cursor: default;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul li.dhtmlxcalendar_selector_cell_active,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul li.dhtmlxcalendar_selector_cell_hover {
	background-color: #fff3a1;
	color: black;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_month table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_month table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right {
	display: none;
	width: 0px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line {
	height: 24px;
	border-top: 1px solid #cccccc;
	border-bottom: 0px solid white;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell {
	width: 35px;
	height: 24px;
	line-height: 24px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours div.dhtmlxcalendar_selector_obj_arrow,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 div.dhtmlxcalendar_selector_obj_arrow,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_selector_obj_arrow {
	top: auto;
	bottom: 1px;
	background-image: url("../imgs/dhxcalendar_terrace/dhxcalendar_selector_bottom.gif");
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line {
	height: 22px;
	border-top: 0px solid white;
	border-bottom: 1px solid #cccccc;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell {
	width: 24px;
	height: 22px;
	line-height: 22px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right {
	display: none;
	width: 0px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table {
	margin-top: 0px;
	margin-bottom: 9px;
	border-top: 1px solid #cccccc;
	border-bottom: none;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_month,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_year,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_hours,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_hours2,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_minutes,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_minutes4,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_minutes5 {
	display: none;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_month div.dhtmlxcalendar_area_selector_month,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_year div.dhtmlxcalendar_area_selector_year,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours div.dhtmlxcalendar_area_selector_hours,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 div.dhtmlxcalendar_area_selector_hours,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_area_selector_minutes,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_area_selector_minutes4,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_area_selector_minutes5 {
	display: block;
}
.dhtmlxcalendar_dhx_terrace span.dhtmlxcalendar_label_minutes span.dhtmlxcalendar_selected_date {
	border-bottom: 2px solid red;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn {
	display: none;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell {
	width: 27px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_wn div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell {
	width: 27px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_first,
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell {
	width: 27px;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn {
	display: block;
	width: 27px;
	color: #3da0e3;
	background-color: #efefef;
}
.dhtmlxcalendar_dhx_terrace div.dhtmlxcalendar_wn div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn {
	display: block;
	width: 27px;
	color: #3da0e3;
	background-color: #efefef;
}
div.dhtmlxcalendar_skin_detect {
	position: absolute;
	display: block;
	visibility: hidden;
	left: -100px;
	top: 0px;
	width: 30px;
	height: 10px;
	margin: 0px;
	padding: 0px;
	border: none;
	overflow: hidden;
}
