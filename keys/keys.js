module.exports = {
    mongo: "mongodb+srv://Nikhilesh:Nikhilesh@xseed-cricket-league-vvy68.mongodb.net/test?retryWrites=true&w=majority",
    LeagueSchema: "LeagueSchema",
    Errors: {
        DatabaseError: {
            OnSave: "Failed to save the current Object to DB, Error: ",
            OnConnection: "Failed to connect to database, Error: "
        }
    }
}