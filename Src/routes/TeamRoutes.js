const express = require('express');
const router = express.Router();


const {
  createTeam,
  addUserToTeam,
  removeUserFromTeam,
  updateTeamById,
  deleteTeamById,
  getAllTeams,
  
} = require('../controller/teamController');

router.post('/teams', createTeam);
router.get('/teams', getAllTeams);
router.post('/teams/add-user', addUserToTeam);
router.post('/teams/remove-user', removeUserFromTeam);
router.put('/teams/:id', updateTeamById);
router.delete('/teams/:id', deleteTeamById);


module.exports = router;
