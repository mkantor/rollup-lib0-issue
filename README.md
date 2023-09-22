1. Clone this repository
1. Run `npm run demo`

### Update
Turns out I didn't RTFM closely enough. The README for `@rollup/plugin-node-resolve` [suggests setting
`exportConditions` to `['node']`][1], which works. 🤦

[1]: https://github.com/rollup/plugins/tree/master/packages/node-resolve/#exportconditions
