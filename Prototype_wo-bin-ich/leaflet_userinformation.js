var mymap = L.map('mapid').setView([0.56, 24.40], 3);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2lhbmJydW5uZXIiLCJhIjoiY2puazFqbXV3MGFmNTNrbWgyNG5zcDFyZSJ9.87l6WgQ_tzccQJif8HcnVA', {
    		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
    		id: 'mapbox.streets',
    		accessToken: 'pk.eyJ1IjoiZ2lhbmJydW5uZXIiLCJhIjoiY2puazFqbXV3MGFmNTNrbWgyNG5zcDFyZSJ9.87l6WgQ_tzccQJif8HcnVA'
        }).addTo(mymap);

        var targetMarker = L.marker([0.56, 24.40]).addTo(mymap);
        targetMarker.bindPopup("<b>Deine angegebene Position</b>").openPopup();

        var echtMarker = L.marker([4.56, 28.40]).addTo(mymap);
        echtMarker.bindPopup("<b>Deine tatsächliche Position</b>").openPopup();