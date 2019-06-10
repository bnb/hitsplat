#!/usr/bin/env node

const yargs = require('yargs')
const boxen = require('boxen')
const chalk = require('chalk')
const ping = require('../lib/ping')

yargs
  .usage('Usage: hitsplat')
  .command('$0', 'Check to see the lowest RuneScape 3 server ping', () => {}, (argv) => {
    lowest()
  })
  .help('h')
  .alias('h', 'help')
  .strict()
  .recommendCommands()
  .option('v', {
    alias: 'version',
    global: false,
    type: 'boolean',
    describe: 'Show the current version',
    skipValidation: true
  })
  .version(false)
  .fail(function (msg, err, yargs) {
    if (err) throw err
    console.error(fixHelp(yargs.help()))
    console.error(msg)
    process.exit(1)
  })
  .argv

async function lowest () {
  const arrayOfPingObjects = await ping()
  .then((result) => {
    const lowestPingServer = { world: '', ping: 2147483647 }
    for(var server in result) {
      if(typeof result[server].ping === 'number' && result[server].ping < lowestPingServer.ping) {
        lowestPingServer.world = result[server].world
        lowestPingServer.worldReal = result[server].worldReal
        lowestPingServer.worldNumber = server
        lowestPingServer.worldIP = result[server].worldIP
        lowestPingServer.ping = result[server].ping
      }
    }
    return lowestPingServer
  })

  const output = {
    title: `${chalk.red('Hitsplat')}: The RuneScape 3 Latency Tool`,
    worldOutput: `   ${chalk.yellow('World')}: ${arrayOfPingObjects.world}`,
    pingOutput: `    ${chalk.yellow('Ping')}: ${arrayOfPingObjects.ping}`
  }

  const boxenOptions = {
    padding: 2,
    margin: 2,
    float: 'center',
    align: 'left',
    borderStyle: 'round'
  }

  return console.log(boxen(`${output.title}\n\n${output.worldOutput}\n${output.pingOutput}`, boxenOptions))
}