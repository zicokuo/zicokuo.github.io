# mongoDb 开发纪要

## 集群

### 分片寻址离散问题

`1` 利用MongoDB分片均衡分布机制,使用_id作为均片键,可以增加不同范围集合查询和计算效率;

`2` 同样利用均衡分布机制,采用时序升序权重较大的索引字段作为片键,可以使频繁查询相同集合进行倾斜存放,让单机性能查找性能提升,优化分片后寻址效率;

### MongoDB事务提交

>Nodejs中使用批量异步提交MongoDB操作，首先得开启session,操作中传递session进去,最后commit session，如果按500个数据记录就需要分片事务提交，那么就得预先储存多个session，并且通过异步并发运行触发方法进行提交。

`解决方案`
 通过批量声明session并暂存到数组,然后使用并发async.parallel进行提交;

### MongoDB Join表

MongoDB Join 表是通过aggregate中$lookup方法进行join操作，join后的记录集合会写入到as配置的字段中，此时数据集中存在嵌套文档的字段,实体相当于leftJoin的一棵树；
`1`  lookup之后，采用unwind获得相当于union right的集合,然后采用addFields把需要的字段添加到结果中；
`2`  lookup之后,直接采用addFields把需要的字段添加到结果集中,相当于union操作；
