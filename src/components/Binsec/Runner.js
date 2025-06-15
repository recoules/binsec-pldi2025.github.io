import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  self['main-worker'] = new Worker('/js/main-worker.js');
  self['main-worker-ready'] = true;
}
