(function($) {
	$.fn.runDigits = function() {
		return this.each(function() {
			var $this = $(this),
				max = ($this.data('max') || '10 000').replace(/[ -.,]/g, ''),
				n = max,
				l = max.length,
				str = '',
				a = [];
			for (var i=0;i<l;i++) {
				a.push(n%10)
				str = ['<span data-end="', a[i], '">0</span>', (i%3 == 0 ? ' ' : ''), str].join('');
				n = Math.floor(n/10)
			}
			$this.append(str)
			$this.children().hide()
			digitRun($this.children())
		})

		;function digitRun(els) {
			els.each(function() {
				var $this = $(this),
					end = $this.data('end')*1 || 10,
					interval,
					counter = 0;
				$this.show()
				interval = window.setInterval(function() {
					if (counter >= end) {
						clearInterval(interval)
						return
					}
					counter++
					$this.text(counter%10)
				}, Math.min(800/end, 120))
			})
		}
	}
}(jQuery));
