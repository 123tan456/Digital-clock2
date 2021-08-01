function showTime(){

			var date = new Date();
			var h = date.getHours();  //it is a 24 hours clock (0-23)
			var m = date.getMinutes(); //0-59
			var s = date.getSeconds(); //0-59
			var session = "AM" ;

			if(h == 0){
				h = 12;
			}

			if(h > 12){
				h = h-12;
				session = "PM";
			}

			if(h < 10){
				h = "0" + h;
			}

			if(m < 10){
				m = "0" + m;
			}

			if(s < 10){
				s = "0" + s;
			}

			document.getElementById("hours").innerHTML = h;
			document.getElementById("minutes").innerHTML = m;
			document.getElementById("seconds").innerHTML = s;
			document.getElementById("amorpm").innerHTML = session;

		}
		showTime();
		setInterval(showTime, 1000);

		function showDate(){
			var mydate = new Date();
			var day = mydate.getDay();
			var month = mydate.getMonth();
			var year= mydate.getYear();
			var d = mydate.getDate();

			if(year<1000)
				year+=1900;
			if(d<10)
				d= '0' + d;

			var marr = new Array("January", "February","March","April", "May", "June", "July", "August", "September", "October", "November", "December");
				var darr = new Array("Sunday", "Monday", "Tuesday","Wednesday", "Thusday", "Friday", "Saturday");

				newdate = darr[day] + "," + " " + marr[month] + " " + d + " "  + year ;
				document.getElementById("MyDateDisplay").innerText = newdate;
				document.getElementById("MyDateDisplay").textContent = newdate; 
		}
		showDate();	

