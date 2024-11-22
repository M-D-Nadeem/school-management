import connection from "../connect.js";
import haversine from "haversine-distance"
const addSchool=(req,res)=>{
    const { name, address, latitude, longitude } = req.body;

    if(!name || !address || !latitude || !longitude){
        return res.status(400).json({ error: 'Invalid input data' });
    }
    const query=`insert into school(name,address,latitude,longitude) values (?, ?, ?, ?);`
    connection.query(query,[name, address, latitude, longitude],(err,result)=>{
        if (err) {
            return res.status(500).json({ error: 'Failed to add the school',err });
          }
          return res.status(200).json({ message: 'School added successfully', id: result.insertId })
    })

}
const listSchools=(req,res)=>{
    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);

    if(isNaN(userLatitude) || isNaN(userLongitude)){
        return res.status(400).json({ error: 'Invalid user coordinates' });
    }
    const query="Select * from school;"
    connection.query((query),(err,schools)=>{
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve schools' });
          }
        const sortedSchool=schools.map((school)=>{
            const schoolCoordinates = { lat: school.latitude, lon: school.longitude };
            const userCoordinates = { lat: userLatitude, lon: userLongitude };
            school.distance = haversine(userCoordinates, schoolCoordinates) /1000;
            return school;
        }).sort((a, b) => a.distance - b.distance);

        res.json(sortedSchool);
    })
}

export {addSchool,listSchools}