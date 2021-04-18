$('#cite').magnificPopup({
  delegate: 'a',
  removalDelay: 1,
  callbacks: {
    beforeOpen: function() {
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true
});
