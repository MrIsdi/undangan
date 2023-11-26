import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function PlazaMipa(){
    return(
        <>
            <MapContainer
                center={[-0.911122,100.461109]}
                zoom={20}
                className="md:w-1/3 w-3/4 aspect-square rounded-[20px]"
                >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-0.911122,100.461109]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}