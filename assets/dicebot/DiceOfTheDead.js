/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$upcase', '$===', '$to_i', '$last_match', '$checkInfection', '$rollZombie', '$times', '$roll', '$+', '$-', '$ceil', '$/', '$[]', '$first', '$last', '$max', '$min', '$assoc']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'DiceOfTheDead');

    var $nesting = [self].concat($parent_nesting), $DiceOfTheDead_initialize$1, $DiceOfTheDead_rollDiceCommand$2, $DiceOfTheDead_checkInfection$3, $DiceOfTheDead_rollZombie$5;

    
    Opal.const_set($nesting[0], 'ID', "DiceOfTheDead");
    Opal.const_set($nesting[0], 'NAME', "ダイス・オブ・ザ・デッド");
    Opal.const_set($nesting[0], 'SORT_KEY', "たいすおふさてつと");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・ゾンビ化表　ZMB+x\n" + "（x=オープン中の感染度マスの数。+xは省略可能、省略時は0）\n" + "・感染度表　BIOx\n" + "（xは被弾回数。xは省略可能、省略時は1）\n" + "（上記二つは最初からシークレットダイスで行われます）\n");
    self.$setPrefixes(["(ZMB|BIO).*"]);
    
    Opal.def(self, '$initialize', $DiceOfTheDead_initialize$1 = function $$initialize() {
      var $iter = $DiceOfTheDead_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $DiceOfTheDead_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $DiceOfTheDead_initialize$1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 1;
      return (self.d66Type = 2);
    }, $DiceOfTheDead_initialize$1.$$arity = 0);
    
    Opal.def(self, '$rollDiceCommand', $DiceOfTheDead_rollDiceCommand$2 = function $$rollDiceCommand(command) {
      var $a, self = this, result = nil, secret_flg = nil, $case = nil, roll_times = nil, value = nil;

      
      command = command.$upcase();
      result = "";
      secret_flg = false;
      $case = command;
      if (/^BIO(\d+)?$/i['$===']($case)) {
      roll_times = ($truthy($a = $$($nesting, 'Regexp').$last_match(1)) ? $a : 1).$to_i();
      result = self.$checkInfection(roll_times);
      secret_flg = true;}
      else if (/^ZMB(\+(\d+))?$/i['$===']($case)) {
      value = $$($nesting, 'Regexp').$last_match(2).$to_i();
      result = self.$rollZombie(value);
      secret_flg = true;};
      return [result, secret_flg];
    }, $DiceOfTheDead_rollDiceCommand$2.$$arity = 1);
    
    Opal.def(self, '$checkInfection', $DiceOfTheDead_checkInfection$3 = function $$checkInfection(roll_times) {
      var $$4, self = this, result = nil;

      
      result = "感染度表";
      $send(roll_times, 'times', [], ($$4 = function(){var self = $$4.$$s || this, $a, $b, d1 = nil, d2 = nil, index1 = nil, index2 = nil, table = nil;

      
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (d1 = ($a[0] == null ? nil : $a[0])), $b;
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (d2 = ($a[0] == null ? nil : $a[0])), $b;
        result = $rb_plus(result, "" + "　＞　出目：" + (d1) + "、" + (d2) + "　");
        index1 = $rb_minus($rb_divide(d1, 2.0).$ceil(), 1);
        index2 = $rb_minus($rb_divide(d2, 2.0).$ceil(), 1);
        table = [["「右下（【足】＋１）」", "「右中（【足】＋１）」", "「右上（【足】＋１）」"], ["「中下（【腕】＋１）」", "「真中（【腕】＋１）」", "「中上（【腕】＋１）」"], ["「左下（【頭】＋１）」", "「左中（【頭】＋１）」", "「左上（【頭】＋１）」"]];
        return (result = $rb_plus(result, table['$[]'](index1)['$[]'](index2)));}, $$4.$$s = self, $$4.$$arity = 0, $$4));
      return result;
    }, $DiceOfTheDead_checkInfection$3.$$arity = 1);
    return (Opal.def(self, '$rollZombie', $DiceOfTheDead_rollZombie$5 = function $$rollZombie(value) {
      var $a, $b, self = this, d1 = nil, d2 = nil, diceTotal = nil, table = nil, minDice = nil, maxDice = nil, index = nil, _number = nil, text = nil, result = nil;

      
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (d1 = ($a[0] == null ? nil : $a[0])), $b;
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (d2 = ($a[0] == null ? nil : $a[0])), $b;
      diceTotal = $rb_plus($rb_plus(d1, d2), value);
      table = [[5, "５以下：影響なし"], [6, "６：任意の部位を１点回復"], [7, "７：〈アイテム〉武器を１つその場に落とす"], [8, "８：〈アイテム〉便利道具１つをその場に落とす"], [9, "９：〈アイテム〉消耗品１つをその場に落とす"], [10, "１０：腕の傷が広がる。「部位：【腕】」１点ダメージ"], [11, "１１：足の傷が広がる。「部位：【足】」１点ダメージ"], [12, "１２：頭の傷が広がる。「部位：【頭】」１点ダメージ"], [13, "１３：【ゾンビ化表】が新たに適用されるまで「【感染度】＋１マス」の効果を受ける"], [14, "１４：即座に自分以外の味方１人のスロット内の〈アイテム〉１つをランダムに捨てさせる"], [15, "１５：味方１人に素手で攻撃を行う"], [16, "１６：即座に感染度が１上昇する"], [17, "１７：次のターンのみ、すべての【能力値】を２倍にする"], [18, "１８以上：自分以外の味方１人にできる限り全力で攻撃を行う。〈アイテム〉も可能な限り使用する"]];
      minDice = table.$first().$first();
      maxDice = table.$last().$first();
      index = diceTotal;
      index = [minDice, index].$max();
      index = [index, maxDice].$min();
      $b = table.$assoc(index), $a = Opal.to_ary($b), (_number = ($a[0] == null ? nil : $a[0])), (text = ($a[1] == null ? nil : $a[1])), $b;
      result = "" + "ゾンビ化表　＞　出目：" + (d1) + "＋" + (d2) + "　感染度：" + (value) + "　合計値：" + (diceTotal) + "　＞　" + (text);
      return result;
    }, $DiceOfTheDead_rollZombie$5.$$arity = 1), nil) && 'rollZombie';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
