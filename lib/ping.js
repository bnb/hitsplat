const ping = require('ping')
const servers = require('./servers')

const details = []

const pingFunction = async () => {
  let arrayOfFinalServerObjects = await Promise.all(servers.map(async(servers, currentIndex, arrayWeOperateOn) => {
    const pingResult = await ping.promise.probe(servers)
    details.server = {
      'world': arrayWeOperateOn[currentIndex],
      'worldReal': pingResult.host,
      'worldIP': pingResult.numeric_host,
      'ping': pingResult.time
    }
    return details.server
  }))
  return await slimToTime(arrayOfFinalServerObjects)
}

async function slimToTime (arrayOfServerDetailObjects) {
  try {
    const buildFinalArrayToReturn = arrayOfServerDetailObjects.map(server => {
      const finalArrayToReturn = {}
      if(server.ping !== 'unknown') {
        finalArrayToReturn.world = server.world
        finalArrayToReturn.worldReal = server.worldReal
        finalArrayToReturn.worldIP = server.worldIP
        finalArrayToReturn.ping = server.ping
      } else {
        finalArrayToReturn[server.world] = 'offline'

      }
      return finalArrayToReturn
    })
    return buildFinalArrayToReturn
  } catch (rejectedValue) {
    console.log(rejectedValue)
  }
}

module.exports = pingFunction