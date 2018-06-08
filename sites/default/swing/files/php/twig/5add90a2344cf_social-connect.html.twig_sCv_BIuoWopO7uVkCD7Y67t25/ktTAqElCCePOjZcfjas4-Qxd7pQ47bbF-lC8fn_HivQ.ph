<?php

/* modules/social_connect/templates/social-connect.html.twig */
class __TwigTemplate_ce3e44502eb93e30f23f72661c33f30f6cb7d63492c90cb701ee10c73961f80f extends Twig_Template
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
        $tags = array("if" => 1, "for" => 12);
        $filters = array("raw" => 2, "length" => 9);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'for'),
                array('raw', 'length'),
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

        // line 1
        if (($context["above_caption"] ?? null)) {
            // line 2
            echo "  <div class=\"social-connect-caption above\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["above_caption"] ?? null)));
            echo "</div>
";
        }
        // line 4
        echo "
";
        // line 5
        if (((($context["position"] ?? null) == "below") && ($context["below_caption"] ?? null))) {
            // line 6
            echo "  <div class=\"social-connect-caption below\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["below_caption"] ?? null)));
            echo "</div>
";
        }
        // line 8
        echo "
";
        // line 9
        if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
            // line 10
            echo "  <div class=\"social-connect\">
    <div class=\"connections\">
      ";
            // line 12
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 13
                echo "        <div class=\"item ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "source", array()), "html", null, true));
                echo "\" id=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "id", array()), "html", null, true));
                echo "\"><span></span>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "button_text", array()), "html", null, true));
                echo "</div>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 15
            echo "    </div>
  </div>
";
        }
        // line 18
        echo "
";
        // line 19
        if (((($context["position"] ?? null) == "above") && ($context["below_caption"] ?? null))) {
            // line 20
            echo "  <div class=\"social-connect-caption below\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["below_caption"] ?? null)));
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/social_connect/templates/social-connect.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 20,  96 => 19,  93 => 18,  88 => 15,  75 => 13,  71 => 12,  67 => 10,  65 => 9,  62 => 8,  56 => 6,  54 => 5,  51 => 4,  45 => 2,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/social_connect/templates/social-connect.html.twig", "/home/mxubgpot/public_html/modules/social_connect/templates/social-connect.html.twig");
    }
}
