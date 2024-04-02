const Team = require('../models/Team');

const createTeam = async (req, res) => {
    try {
        const { name } = req.body;
        const newTeam = await Team.create({ name });
        res.status(200).json(newTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllTeams = async (req,res) => {
    try{
        const TeamsInfo = await Team.find({}).populate('users').exec();
       
        return res.status(200).json(
            TeamsInfo,
        )
    } catch(error){
        res.status(400).json({ error: error.message });
    }
}

const addUserToTeam = async (req, res) => {
    try {
        const { teamId, userId } = req.body;
        const team = await Team.findById(teamId);
        if (!team) {
          return res.status(404).json({ error: 'Team not found' });
        }

        if (team.users.includes(userId)) {
            return res.status(200).json({ message: 'User is already a member of the team' });
        }
    
        team.users.push(userId);
        await team.save();
    
        return res.status(200).json({ message: 'User added to team successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


const removeUserFromTeam = async (req, res) => {
    try {
        const { teamId, userId } = req.body;
        const team = await Team.findById(teamId);
        if (!team) {
          return res.status(404).json({ error: 'Team not found' });
        }
    
        team.users = team.users.filter(user => user.toString() !== userId);
        await team.save();
    
        return res.status(200).json({ message: 'User removed from team successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const updateTeamById = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const updatedTeam = await Team.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedTeam) {
          return res.status(404).json({ error: 'Team not found' });
        }
        res.json(updatedTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteTeamById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const deletedTeam = await Team.findByIdAndDelete(id);
        if (!deletedTeam) {
          return res.status(404).json({ error: 'Team not found' });
        }
        res.json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addUserToTeam, removeUserFromTeam ,updateTeamById ,deleteTeamById ,createTeam, getAllTeams };
