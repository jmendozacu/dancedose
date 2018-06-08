<?php

/* modules/calendar/templates/calendar-day-overlap.html.twig */
class __TwigTemplate_73d3f50f560e64be118cc0d956d681d4bb1cede1301cf2c53cb63966292eee46 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 74, "for" => 75, "if" => 76);
        $filters = array("length" => 78);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'for', 'if'),
                array('length'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 32
        echo "<div class=\"calendar-calendar\"><div class=\"day-view\">
";
        // line 65
        echo "<div id=\"single-day-container\">
  <table class=\"full\">
    <tbody>
      <tr class=\"holder\">
        <td class=\"calendar-time-holder\"></td>
        <td class=\"calendar-day-holder\"></td>
      </tr>
      <tr>
        <td class=\"first\">
          ";
        // line 74
        $context["is_first"] = true;
        // line 75
        echo "          ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["rows"] ?? null), "items", array(), "array"));
        foreach ($context['_seq'] as $context["time_cnt"] => $context["hour"]) {
            // line 76
            echo "            ";
            if (($context["time_cnt"] == 0)) {
                // line 77
                echo "              ";
                $context["class"] = "first";
                // line 78
                echo "            ";
            } elseif (($context["time_cnt"] == (twig_length_filter($this->env, ($context["start_times"] ?? null)) - 1))) {
                // line 79
                echo "              ";
                $context["class"] = "last";
                // line 80
                echo "            ";
            } else {
                // line 81
                echo "              ";
                $context["class"] = "";
                // line 82
                echo "            ";
            }
            // line 83
            echo "            <div class=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["class"] ?? null), "html", null, true));
            echo " calendar-agenda-hour\">
              <span class=\"calendar-hour\">";
            // line 84
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["hour"], "hour", array()), "html", null, true));
            echo "</span><span class=\"calendar-ampm\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["hour"], "ampm", array()), "html", null, true));
            echo "</span>
            </div>
          ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['time_cnt'], $context['hour'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 87
        echo "        </td>
        <td class=\"last\">
          ";
        // line 89
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["rows"] ?? null), "items", array(), "array"));
        foreach ($context['_seq'] as $context["time_cnt"] => $context["hour"]) {
            // line 90
            echo "            ";
            if (($context["time_cnt"] == 0)) {
                // line 91
                echo "              ";
                $context["class"] = "first";
                // line 92
                echo "            ";
            } elseif (($context["time_cnt"] == (twig_length_filter($this->env, ($context["start_times"] ?? null)) - 1))) {
                // line 93
                echo "              ";
                $context["class"] = "last";
                // line 94
                echo "            ";
            } else {
                // line 95
                echo "              ";
                $context["class"] = "";
                // line 96
                echo "            ";
            }
            // line 97
            echo "
            ";
            // line 98
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["columns"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
                // line 99
                echo "              <div class=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["class"] ?? null), "html", null, true));
                echo " calendar-agenda-items single-day\">
                <div class=\"half-hour\">&nbsp;</div>
                ";
                // line 101
                if ((($context["is_first"] ?? null) && $this->getAttribute($this->getAttribute($context["hour"], "values", array(), "array"), $context["column"], array(), "array"))) {
                    // line 102
                    echo "                  <div class=\"calendar item-wrapper first_item\">
                  ";
                    // line 103
                    $context["is_first"] = true;
                    // line 104
                    echo "                ";
                } else {
                    // line 105
                    echo "                  <div class=\"calendar item-wrapper\">
                ";
                }
                // line 107
                echo "                  <div class=\"inner\">
                    ";
                // line 108
                if (( !twig_test_empty($this->getAttribute($context["hour"], "values", array(), "array")) &&  !twig_test_empty($this->getAttribute($this->getAttribute($context["hour"], "values", array(), "array"), $context["column"], array(), "array")))) {
                    // line 109
                    echo "                      ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($context["hour"], "values", array(), "array"), $context["column"], array(), "array"));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 110
                        echo "                        ";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["item"], "html", null, true));
                        echo "
                      ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 112
                    echo "                    ";
                } else {
                    // line 113
                    echo "                      &nbsp;
                    ";
                }
                // line 115
                echo "                  </div>
                </div>
              </div>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 119
            echo "          ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['time_cnt'], $context['hour'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 120
        echo "        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class=\"single-day-footer\">&nbsp;</div>
</div></div>
";
    }

    public function getTemplateName()
    {
        return "modules/calendar/templates/calendar-day-overlap.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  198 => 120,  192 => 119,  183 => 115,  179 => 113,  176 => 112,  167 => 110,  162 => 109,  160 => 108,  157 => 107,  153 => 105,  150 => 104,  148 => 103,  145 => 102,  143 => 101,  137 => 99,  133 => 98,  130 => 97,  127 => 96,  124 => 95,  121 => 94,  118 => 93,  115 => 92,  112 => 91,  109 => 90,  105 => 89,  101 => 87,  90 => 84,  85 => 83,  82 => 82,  79 => 81,  76 => 80,  73 => 79,  70 => 78,  67 => 77,  64 => 76,  59 => 75,  57 => 74,  46 => 65,  43 => 32,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/calendar/templates/calendar-day-overlap.html.twig", "/home/mxubgpot/public_html/modules/calendar/templates/calendar-day-overlap.html.twig");
    }
}
