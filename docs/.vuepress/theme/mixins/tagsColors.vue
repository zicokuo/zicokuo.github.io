<script>
import colors from "vuetify/lib/util/colors";
export default {
  name: "tagColorsMixins",
  data() {
    return {
      defaultTagsColors: {
        python: colors.lime.lighten1,
        js: colors.pink.darken2,
        ai: colors.teal.lighten4,
        mongodb: colors.green.lighten3
      }
    };
  }
};
</script>
