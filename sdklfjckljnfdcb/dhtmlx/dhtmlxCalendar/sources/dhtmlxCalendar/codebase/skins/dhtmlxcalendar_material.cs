/*
Product Name: dhtmlxCalendar 
Version: 5.1.0 
Edition: Standard 
License: content of this file is covered by DHTMLX Commercial or enterpri. Usage outside GPL terms is prohibited. To obtain Commercial or Enterprise license contact sales@dhtmlx.com
Copyright UAB Dinamenta http://www.dhtmlx.com
*/

/*
	skin detected: material
	include extra file: skins/material.less
*/

@keyframes dhx_loader_rotate {
	100% {
		transform: rotate(360deg);
	}
}
@keyframes dhx_loader_dash {
	0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -35px;
	}
	100% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -124px;
	}
}
.dhtmlxcalendar_material {
	position: absolute;
	display: block;
	background-color: white;
	font-size: 14px;
	font-family: Roboto, Arial, Helvetica;
	color: #404040;
}
.dhtmlxcalendar_material.dhtmlxcalendar_in_input {
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.dhtmlxcalendar_material.dhtmlxcalendar_in_input div.dhtmlxcalendar_month_cont,
.dhtmlxcalendar_material.dhtmlxcalendar_in_input div.dhtmlxcalendar_days_cont,
.dhtmlxcalendar_material.dhtmlxcalendar_in_input div.dhtmlxcalendar_dates_cont,
.dhtmlxcalendar_material.dhtmlxcalendar_in_input div.dhtmlxcalendar_time_cont {
	border-color: white;
}
.dhtmlxcalendar_material.dhtmlxcalendar_in_input div.dhtmlxcalendar_time_cont {
	border-top: 1px solid #dfdfdf;
}
.dhtmlxcalendar_material ul.dhtmlxcalendar_line {
	position: relative;
	display: block;
	clear: both;
	font: inherit;
	margin: 0px;
	padding: 0px;
	overflow: hidden;
	margin-left: 12px;
	width: 225px;
}
.dhtmlxcalendar_material ul.dhtmlxcalendar_line li {
	float: left;
	position: relative;
	list-style-type: none;
	list-style-image: none;
	text-align: center;
	vertical-align: middle;
	font: inherit;
	cursor: default;
	overflow: hidden;
	margin: 0px;
	padding: 0px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont {
	position: relative;
	display: block;
	width: 249px;
	margin: 0px;
	border-width: 1px 1px 0px 1px;
	border-style: solid;
	border-color: #dfdfdf;
	overflow: hidden;
	font: inherit;
	-webkit-user-select: text;
	-khtml-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	-o-user-select: text;
	user-select: text;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr {
	width: 225px;
	height: 31px;
	line-height: 31px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow {
	position: absolute;
	top: 0px;
	width: 18px;
	height: 31px;
	color: inherit;
	text-align: center;
	background-position: center center;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_left,
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_left_hover {
	left: 4px;
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_arrow_left.png");
}
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_right,
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr div.dhtmlxcalendar_month_arrow.dhtmlxcalendar_month_arrow_right_hover {
	right: 4px;
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_arrow_right.png");
}
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr span.dhtmlxcalendar_month_label_month,
.dhtmlxcalendar_material div.dhtmlxcalendar_month_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_month_hdr span.dhtmlxcalendar_month_label_year {
	position: relative;
	font: inherit;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_days_cont {
	position: relative;
	display: block;
	width: 249px;
	margin: 0px;
	border-left: 1px solid #dfdfdf;
	border-right: 1px solid #dfdfdf;
	overflow: hidden;
	-webkit-user-select: text;
	-khtml-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	-o-user-select: text;
	user-select: text;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line {
	height: 31px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li {
	width: 31px;
	height: 31px;
	line-height: 31px;
	margin-left: 1px;
	font-size: 12px;
	color: #9a9a9a;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_first {
	margin-left: 1px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_day_weekday_cell_first {
	margin-left: 1px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont {
	position: relative;
	display: block;
	width: 249px;
	margin: 0px;
	padding-bottom: 8px;
	border-width: 0px 1px 1px 1px;
	border-style: solid;
	border-color: #dfdfdf;
	overflow: hidden;
	font: inherit;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line {
	margin-top: 1px;
	margin-left: 13px;
	height: 31px;
	line-height: 31px;
	font: inherit;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li {
	width: 31px;
	height: 31px;
	line-height: 31px;
	margin-right: 1px;
	border-radius: 50%;
	overflow: visible;
	font: inherit;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li div.dhtmlxcalendar_label {
	position: relative;
	width: 100%;
	height: 100%;
	font: inherit;
	line-height: 31px;
	text-align: center;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li div.dhtmlxcalendar_label.dhtmlxcalendar_label_title {
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_marker.gif");
	background-position: top right;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell {
	color: #a6a6a6;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_weekend {
	color: #e6918e;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date {
	color: #a6a6a6;
	background-color: #dcdcdc;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_weekend {
	color: #e6918e;
	background-color: #dcdcdc;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_dis {
	color: #c0c0c0;
	background-color: #f2f2f2;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_weekend_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_weekend_dis {
	color: #e6918e;
	background-color: #f2f2f2;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_holiday,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_weekend_holiday {
	color: #e6918e;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_holiday,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_weekend_holiday {
	color: #d43f3a;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_holiday_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_weekend_holiday_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_holiday_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_weekend_holiday_dis {
	color: #d43f3a;
	background-color: #f2f2f2;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_hover {
	color: #a6a6a6;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_hover {
	color: #a6a6a6;
	background-color: #dcdcdc;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_weekend_hover {
	color: #e6918e;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_weekend_hover {
	color: #e6918e;
	background-color: #dcdcdc;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_holiday_hover,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_weekend_holiday_hover,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_holiday_hover,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_date_weekend_holiday_hover {
	color: #d43f3a;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month {
	color: #404040;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_weekend {
	color: #d43f3a;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date {
	color: white;
	background-color: #3399cc;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_weekend {
	color: white;
	background-color: #ef5350;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_dis {
	color: #c0c0c0;
	background-color: #f2f2f2;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_weekend_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_weekend_dis {
	color: #d43f3a;
	background-color: #f2f2f2;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_holiday {
	color: #d43f3a;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_weekend_holiday {
	color: #d43f3a;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_holiday {
	color: white;
	background-color: #ef5350;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_weekend_holiday {
	color: white;
	background-color: #ef5350;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_holiday_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_holiday_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_weekend_holiday_dis,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_weekend_holiday_dis {
	color: #d43f3a;
	background-color: #f2f2f2;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_hover {
	color: #404040;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_weekend_hover {
	color: #d43f3a;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_hover {
	color: white;
	background-color: #3399cc;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_weekend_hover {
	color: white;
	background-color: #ef5350;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_holiday_hover {
	color: #d43f3a;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_weekend_holiday_hover {
	color: #d43f3a;
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_holiday_hover {
	color: white;
	background-color: #ef5350;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_month_date_weekend_holiday_hover {
	color: white;
	background-color: #ef5350;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont {
	position: relative;
	display: block;
	width: 249px;
	height: 31px;
	border-left: 1px solid #dfdfdf;
	border-right: 1px solid #dfdfdf;
	border-bottom: 1px solid #dfdfdf;
	overflow: hidden;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li {
	width: 225px;
	height: 31px;
	line-height: 31px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_time_hdr {
	text-align: left;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_hours {
	margin-left: 42px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont ul.dhtmlxcalendar_line li div.dhtmlxcalendar_time_img {
	position: absolute;
	left: 22px;
	top: 7px;
	width: 18px;
	height: 18px;
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_clock.png");
	background-position: center center;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li div.dhtmlxcalendar_time_img {
	left: 75px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr {
	text-align: center;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_hours {
	margin-left: 0px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_today,
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_clear {
	display: none;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr div.dhtmlxcalendar_time_img,
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_hours,
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_minutes,
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_colon {
	display: none;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_today {
	float: right;
	margin-right: 8px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_clear {
	float: right;
	margin-right: 74px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_selected_date {
	border-bottom: 2px solid red;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_today {
	float: right;
	margin-right: 8px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_time_cont.dhtmlxcalendar_mode_time_today ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell.dhtmlxcalendar_time_hdr span.dhtmlxcalendar_label_clear {
	float: right;
	margin-right: 22px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn,
.dhtmlxcalendar_material div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn {
	display: none;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell,
.dhtmlxcalendar_material div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_first,
.dhtmlxcalendar_material div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell {
	width: 27px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_wn div.dhtmlxcalendar_days_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn {
	display: block;
	width: 27px;
	color: #3da0e3;
	background-color:  - #060606;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_wn div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell {
	width: 27px;
	height: 28px;
	line-height: 27px;
	margin-top: 2px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_wn div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell div {
	line-height: inherit;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_wn div.dhtmlxcalendar_dates_cont ul.dhtmlxcalendar_line li.dhtmlxcalendar_cell_wn {
	display: block;
	width: 27px;
	color: #3da0e3;
	background-color:  - #060606;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_cover {
	position: absolute;
	left: 1px;
	background-color: white;
	opacity: 0.5;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj {
	position: absolute;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_selector_obj_arrow {
	position: absolute;
	bottom: auto;
	top: 1px;
	left: 0px;
	width: 100%;
	height: 9px;
	overflow: hidden;
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_selector_top.gif");
	background-position: top center;
	background-repeat: no-repeat;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table {
	border-bottom: 1px solid #dfdfdf;
	border-top: 0px solid white;
	background-color: white;
	margin-top: 9px;
	box-shadow: 0 2px 6px rgba(0,0,0,0.24);
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right {
	width: 24px;
	text-align: center;
	border-color: #dfdfdf;
	border-style: solid;
	padding: 0px;
	margin: 0px;
	background-color: white;
	background-position: center center;
	background-repeat: no-repeat;
	cursor: default;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left {
	border-width: 1px 0px 0px 1px;
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_arrow_left.png");
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left.dhtmlxcalendar_selector_cell_left_hover {
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right {
	border-width: 1px 1px 0px 0px;
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_arrow_right.png");
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right.dhtmlxcalendar_selector_cell_right_hover {
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle {
	cursor: default;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul {
	display: block;
	clear: both;
	background-color: white;
	border-left: 1px solid #dfdfdf;
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
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul li {
	float: left;
	list-style-type: none;
	list-style-image: none;
	text-align: center;
	vertical-align: middle;
	margin: 0px;
	padding: 0px;
	border-right: 1px solid #dfdfdf;
	background-color: white;
	cursor: default;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	font-size: 14px;
	font-family: Roboto, Arial, Helvetica;
	color: #404040;
	font-size: 0.9em;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul li.dhtmlxcalendar_selector_cell_active,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul li.dhtmlxcalendar_selector_cell_hover {
	background-color: #ebebeb;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line {
	height: 28px;
	border-top: 1px solid #dfdfdf;
	border-bottom: 0px solid white;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell {
	width: 50px;
	height: 28px;
	line-height: 28px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_month table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_month table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right {
	display: none;
	width: 0px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours div.dhtmlxcalendar_selector_obj_arrow,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 div.dhtmlxcalendar_selector_obj_arrow,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_selector_obj_arrow {
	top: auto;
	bottom: 1px;
	background-image: url("../imgs/dhxcalendar_material/dhxcalendar_selector_bottom.gif");
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours div.dhtmlxcalendar_selector_obj_arrow ul.dhtmlxcalendar_selector_line,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 div.dhtmlxcalendar_selector_obj_arrow ul.dhtmlxcalendar_selector_line,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_selector_obj_arrow ul.dhtmlxcalendar_selector_line {
	height: 28px;
	border-top: 0px solid white;
	border-bottom: 1px solid #dfdfdf;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table {
	margin-top: 0px;
	margin-bottom: 9px;
	border-bottom: none;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_middle ul.dhtmlxcalendar_selector_line li.dhtmlxcalendar_selector_cell {
	width: 34px;
	height: 28px;
	line-height: 28px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_left,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes table.dhtmlxcalendar_selector_table td.dhtmlxcalendar_selector_cell_right {
	display: none;
	width: 0px;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_month,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_year,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_hours,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_hours2,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_minutes,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_minutes4,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj div.dhtmlxcalendar_area_selector_minutes5 {
	display: none;
}
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_month div.dhtmlxcalendar_area_selector_month,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_year div.dhtmlxcalendar_area_selector_year,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours div.dhtmlxcalendar_area_selector_hours,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_hours2 div.dhtmlxcalendar_area_selector_hours,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_area_selector_minutes,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_area_selector_minutes4,
.dhtmlxcalendar_material div.dhtmlxcalendar_selector_obj.dhtmlxcalendar_selector_minutes div.dhtmlxcalendar_area_selector_minutes5 {
	display: block;
}
.dhtmlxcalendar_ifr {
	position: absolute;
	overflow: hidden;
	background-color: white;
}
div.dhtmlxcalendar_skin_detect {
	position: absolute;
	left: 0px;
	top: -100px;
	margin: 0;
	padding: 0;
	border: 0px solid white;
	width: 40px;
	height: 10px;
	overflow: hidden;
}
