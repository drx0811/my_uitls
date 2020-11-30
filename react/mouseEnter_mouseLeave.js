/**
 * 鼠标移入和移出事件
 * @returns {*}
 */
function f() {
  return(
    <div
      onMouseEnter={(e) => {
        this.changeVisibleBlock(item);
      }}
      onMouseLeave={e => {
        const realTarget = e.toElement || e.relatedTarget;
        const popUp = document.querySelector('.item-goods-balloon');
        const targetInItem = realTarget.nodeType && e.currentTarget.contains(realTarget);
        const targetInPopUp = popUp && popUp.contains(realTarget);
        if (!popUp || (!targetInItem && !targetInPopUp)) {
          this.changeVisibleNone(item);
        }
      }}
    >

      <div className="item-content">{item.name}</div>
      <div className="item-content">
        <span>￥{item.price}</span><span>预计佣金￥{item.prePay}</span>
      </div>
      {
        item.visible &&
        <div className="icons">
          <Balloon className="item-goods-balloon">
            assasasa
          </Balloon>
        </div>
      }
    </div>
  )
}