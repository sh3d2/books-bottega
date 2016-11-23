var heroin = require('heroin-js');

var prod= {
    name: 'test-book-inventory',
    organization: undefined,
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGODB_URI: 'mongodb://heroku_jbj2b46s:voikrvavqqpmo7sj86199mbull@ds159387.mlab.com:59387/heroku_jbj2b46s',
        DUPA: 'dupa'
    },
    addons: {},
    collaborators: ['sh3d2.pl@gmail.com', 'szymon.skirgajllo@gmail.com'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: false},
        'web-auto-scaling': {enabled: false},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'spaces-dns-registry': {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false},
        'app-alerting': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: ['syslog://data.logentries.com:10727'],
    domains: ['test-book-inventory.herokuapp.com']
};

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator(prod);
