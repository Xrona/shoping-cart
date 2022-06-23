import FakeStoreApi from './fakeStoreApi'
import instance from './instance'

export default new instance(new FakeStoreApi())
